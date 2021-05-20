using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.DemoShell {

    public partial class DemoMenuMeta {
        const string CONTEXT_KEY = "DevExtreme.MVC.Demos.DemoShell.DemoMenuMeta";

        public static DemoMenuMeta Get(HttpContextBase context) {
            var items = context.Items;
            if(!items.Contains(CONTEXT_KEY))
                items[CONTEXT_KEY] = new DemoMenuMeta(context);
            return (DemoMenuMeta)items[CONTEXT_KEY];
        }
    }

    public partial class DemoMenuMeta {
        readonly HttpContextBase _http;
        readonly IEnumerable<DemoGroup> _rootGroups;
        readonly IReadOnlyDictionary<string, Demo> _demoByRouteIndex;
        readonly IReadOnlyDictionary<Demo, DemoGroup[]> _parentGroupsIndex;

        public DemoMenuMeta(HttpContextBase http) {
            _http = http;
            _rootGroups = JsonConvert.DeserializeObject<IList<DemoGroup>>(File.ReadAllText(http.Server.MapPath("~/App_Data/menuMeta.json")));

            var groupStack = new Stack<DemoGroup>();
            var demoByRouteIndex = new Dictionary<string, Demo>();
            var parentGroupsIndex = new Dictionary<Demo, DemoGroup[]>();

            Walk(new WalkHandlers {
                OnGroupStart = g => groupStack.Push(g),
                OnGroupEnd = () => groupStack.Pop(),
                OnDemo = d => {
                    if(!d.Hidden && !IsRoutable(d))
                        d.Hidden = true;

                    if(!d.Hidden) {
                        demoByRouteIndex[d.Controller + "&" + d.Action] = d;
                        parentGroupsIndex[d] = groupStack.Reverse().ToArray();

                        d.DescriptionHtml = CommonMark.CommonMarkConverter.Convert(ReadDemoDescriptionFile(d));
                        PopulateFiles(d);
                    }
                }
            });

            _demoByRouteIndex = demoByRouteIndex;
            _parentGroupsIndex = parentGroupsIndex;
        }

        bool IsRoutable(Demo demo) {
            return File.Exists(_http.Server.MapPath($"~/Views/{demo.Controller}/{demo.Action}.cshtml"));
        }

        public Demo CurrentDemo {
            get {
                var values = ((MvcHandler)_http.Handler).RequestContext.RouteData.Values;
                var key = values["controller"] + "&" + values["action"];

                if(!_demoByRouteIndex.ContainsKey(key))
                    return null;

                return _demoByRouteIndex[key];
            }
        }

        public string GetBreadcrumb(Demo demo, string separator) {
            var parentGroups = _parentGroupsIndex[demo];
            return (parentGroups.LastOrDefault(i => i.Breadcrumb) ?? parentGroups[0]).Name
                + " "
                + separator
                + " "
                + demo.Title;
        }

        public IEnumerable<DemoTreeNode> ToHierarchicalDataSource(UrlHelper urlHelper, string currentController, string currentAction) {
            var nodeStack = new Stack<DemoTreeNode>();

            nodeStack.Push(new DemoTreeNode {
                Items = new List<DemoTreeNode>()
            });

            Walk(new WalkHandlers {

                OnGroupStart = g => {
                    nodeStack.Push(new DemoTreeNode {
                        Text = g.Name,
                        Items = new List<DemoTreeNode>()
                    });
                },

                OnGroupEnd = () => {
                    var current = nodeStack.Pop();
                    var parent = nodeStack.Peek();

                    if(current.Items.Count == 1 && nodeStack.Count > 1)
                        current.Items = null;

                    if(!String.IsNullOrEmpty(current.Url))
                        parent.Items.Add(current);
                },

                OnDemo = d => {
                    var url = urlHelper.Action(d.Action, d.Controller);

                    var active = Equals(d.Controller, currentController) && Equals(d.Action, currentAction);

                    nodeStack.Peek().Items.Add(new DemoTreeNode {
                        Text = d.Title,
                        Url = url,
                        Active = active,
                    });

                    foreach(var n in nodeStack) {
                        if(active)
                            n.Active = true;

                        if(String.IsNullOrEmpty(n.Url))
                            n.Url = url;
                    }
                }

            });

            return nodeStack.Peek().Items;
        }

        class WalkHandlers {
            public Action<DemoGroup> OnGroupStart;
            public Action OnGroupEnd;
            public Action<Demo> OnDemo;
        }

        void Walk(WalkHandlers handlers) {
            foreach(var g in _rootGroups)
                WalkGroup(g, handlers);
        }

        void WalkGroup(DemoGroup group, WalkHandlers handlers) {
            var childGroups = group.Groups;
            var demos = group.Demos;

            handlers.OnGroupStart?.Invoke(group);

            if(childGroups != null) {
                if(demos != null)
                    throw new NotSupportedException();

                foreach(var g in childGroups)
                    WalkGroup(g, handlers);

            } else if(demos != null) {
                foreach(var d in demos) {
                    if(!d.Hidden)
                        handlers.OnDemo?.Invoke(d);
                }
            }

            handlers.OnGroupEnd?.Invoke();
        }

        string ReadDemoDescriptionFile(Demo demo) {
            var server = _http.Server;

            var path = server.MapPath(Path.Combine("~", "Content", "Descr", demo.Controller, demo.Action + ".md"));

            if(!File.Exists(path))
                path = server.MapPath(Path.Combine("~", "Content", "Descr", "Temp", demo.Controller, demo.Action + ".md"));

            if(!File.Exists(path))
                return null;

            var content = File.ReadAllText(path);
            content = ReplaceDocLinks(content);

            return content;
        }

        void PopulateFiles(Demo demo) {
            var contentRootPath = _http.Server.MapPath("~");

            demo.Files.Add(new DemoSourceFile(contentRootPath, demo.ControllerPath, new ActionTextParser(demo.Action)));
            demo.Files.Add(new DemoSourceFile(contentRootPath, demo.ViewPath));

            var additionalCssFile = new DemoSourceFile(contentRootPath, demo.AdditionalCssUrl.Replace("~/", ""));
            if(File.Exists(additionalCssFile.GetRealPath()))
                demo.Files.Add(additionalCssFile);

            if(demo.MvcAdditionalFiles != null) {
                foreach(var f in demo.MvcAdditionalFiles)
                    demo.Files.Add(new DemoSourceFile(contentRootPath, "." + Regex.Replace(f, "^/(Content|Scripts)/", "/wwwroot/")));
            }

            Func<string, int> GetPreSortKey = name => {
                if(name.EndsWith(".cshtml"))
                    return 1;

                if(name.EndsWith(demo.Controller.Replace("_", "") + "Controller.cs"))
                    return 2;

                if(name.EndsWith("Controller.cs"))
                    return 3;

                if(name.EndsWith(".css"))
                    return 11;

                return 10;
            };

            demo.Files.Sort((x, y) => {
                var result = GetPreSortKey(x.Name).CompareTo(GetPreSortKey(y.Name));
                if(result != 0)
                    return result;
                return x.Name.CompareTo(y.Name);
            });
        }

        private readonly Regex _htmlLinks = new Regex(
            @"\]\(\/Documentation(.+?)\)",
            RegexOptions.Compiled | RegexOptions.IgnoreCase);
        private string ReplaceDocLinks(string content) {
            var updateLinksContent = _htmlLinks.Replace(content, @"](https://js.devexpress.com/DevExtreme$1)");
            return updateLinksContent;
        }
    }

}
