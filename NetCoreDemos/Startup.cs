using DevExtreme.NETCore.Demos.Models.Northwind;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using System;
using System.IO;
using DevExtreme.NETCore.Demos.Hubs;
using DevExtreme.NETCore.Demos.Models.SignalR;
using AspNetCoreDemos.DemoShell;
using DevExtreme.NETCore.Demos.Models.SignalRTickData;
using DevExtreme.NETCore.Demos.Models.FileManagement;

namespace DevExtreme.NETCore.Demos {
    public class Startup {
        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json");
#if DAILY
            builder.AddJsonFile("appsettings.Daily.json");
#endif
#if PUBLISH
            builder.AddJsonFile("appsettings.Publish.json");
#endif
            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            // Add framework services.
            services
                .AddMvc()
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            services.Configure<RouteOptions>(options => options.AppendTrailingSlash = true);

            services
                .AddMemoryCache()
                .AddSession(s => {
                    s.Cookie.Name = "DevExtreme.NETCore.Demos";
                });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            services.AddDbContext<NorthwindContext>(ConfigureNorthwindContext);

            services.AddDbContext<FileManagementDbContext>(ConfigureFileManagementContext);
            services.AddTransient<DbFileProvider>();

            services.AddTransient(CreateAzureBlobFileProvider);

            services.AddCors(options => options.AddPolicy("CorsPolicy", builder => {
                builder
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowAnyOrigin()
                    .AllowCredentials();
            }));

            services.AddSignalR()
                .AddJsonProtocol(options => { options.PayloadSerializerSettings.ContractResolver = new CamelCaseContractResolver(); });
            services.AddScoped<LiveUpdateSignalRHub>();
            services.AddScoped<StockTickDataHub>();
            services.AddScoped<DataGridCollaborativeEditingHub>();
            services.AddScoped<SchedulerSignalRHub>();
            services.AddSingleton<StockTicker>();
            services.AddSingleton<TickDataService>();

            services.AddAntiforgery(options => {
                options.SuppressXFrameOptionsHeader = true;
            });

#if DEBUG
            services.AddScoped<DemoMenuMeta>();
#else
            services.AddSingleton<DemoMenuMeta>();
#endif


#if DB_LOCALDB
            services.AddEntityFrameworkSqlServer();
#endif

#if DB_SQLITE
            services.AddEntityFrameworkSqlite();
#endif
        }

        static void ConfigureNorthwindContext(IServiceProvider serviceProvider, DbContextOptionsBuilder options) {
            var hosting = serviceProvider.GetRequiredService<IHostingEnvironment>();
#if DB_LOCALDB
            var dbPath = Path.Combine(hosting.ContentRootPath, "Northwind.mdf");
            var connectionString = $@"Data Source=(localdb)\devextreme; AttachDbFileName={dbPath}; Integrated Security=True; MultipleActiveResultSets=True; App=EntityFramework";
            options.UseSqlServer(connectionString);
#endif

#if DB_SQLITE
            var dbPath = Path.Combine(hosting.ContentRootPath, "Northwind.sqlite");
            options.UseSqlite("Data Source=" + dbPath);
#endif
        }

        static void ConfigureFileManagementContext(IServiceProvider serviceProvider, DbContextOptionsBuilder options) {
            var hosting = serviceProvider.GetRequiredService<IHostingEnvironment>();
            var dbPath = Path.Combine(hosting.ContentRootPath, "FileManagement.db");
            options.UseSqlite("Data Source=" + dbPath);
        }

        static AzureBlobFileProvider CreateAzureBlobFileProvider(IServiceProvider serviceProvider) {
            var hosting = serviceProvider.GetRequiredService<IHostingEnvironment>();
            string tempDirPath = Path.Combine(hosting.ContentRootPath, "UploadTemp");
            AzureStorageAccount account = AzureStorageAccount.FileManager;
            return new AzureBlobFileProvider(account.AccountName, account.AccessKey, account.ContainerName, tempDirPath);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if(env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            } else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseSession();
            app.UseCors("CorsPolicy");

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "Default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Default", action = "Index" }
                );
            });

            app.UseSignalR(routes => {
                routes.MapHub<LiveUpdateSignalRHub>("/liveUpdateSignalRHub");
                routes.MapHub<StockTickDataHub>("/stockTickDataHub");
                routes.MapHub<DataGridCollaborativeEditingHub>("/dataGridCollaborativeEditingHub");
                routes.MapHub<SchedulerSignalRHub>("/schedulerSignalRHub");
            });

            Models.SampleData.SampleData.RootPath = env.WebRootPath;

            AzureStorageAccount.Load(Configuration.GetSection("AzureStorage"));
        }
    }
}
