using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Routing;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace AspNetCoreDemos.DemoShell {

    public class DemoMenuMeta {
        readonly string _contentRootPath;
        readonly IHttpContextAccessor _httpAccessor;
        readonly IEnumerable<DemoGroup> _rootGroups;
        readonly IReadOnlyDictionary<string, Demo> _demoByRouteIndex;
        readonly IReadOnlyDictionary<Demo, DemoGroup[]> _parentGroupsIndex;

        public DemoMenuMeta(IHostingEnvironment hosting, IHttpContextAccessor httpAccessor, IActionDescriptorCollectionProvider actionDescriptorsProvider) {
            _contentRootPath = hosting.ContentRootPath;
            _httpAccessor = httpAccessor;

            _rootGroups = JsonConvert.DeserializeObject<IList<DemoGroup>>(File.ReadAllText(Path.Combine(_contentRootPath, "menuMeta.json")));

            var groupStack = new Stack<DemoGroup>();
            var knownActions = actionDescriptorsProvider.ActionDescriptors.Items;

            bool IsRoutable(Demo d) {
                return knownActions
                    .Select(a => a.RouteValues)
                    .Any(r => String.Equals(r["controller"], d.Controller, StringComparison.OrdinalIgnoreCase) && String.Equals(r["action"], d.Action, StringComparison.OrdinalIgnoreCase));
            }

            var demoByRouteIndex = new Dictionary<string, Demo>();
            var parentGroupsIndex = new Dictionary<Demo, DemoGroup[]>();

            Walk(
                g => groupStack.Push(g),
                () => groupStack.Pop(),
                d => {
                    if(!d.Hidden && !IsRoutable(d))
                        d.Hidden = true;

                    if(!d.Hidden) {
                        demoByRouteIndex[(d.Controller + "&" + d.Action).ToLower()] = d;
                        parentGroupsIndex[d] = groupStack.Reverse().ToArray();

                        d.DescriptionHtml = CommonMark.CommonMarkConverter.Convert(ReadDemoDescriptionFile(d));
                        PopulateFiles(d);
                    }
                }
            );

            _demoByRouteIndex = demoByRouteIndex;
            _parentGroupsIndex = parentGroupsIndex;
        }

        public Demo CurrentDemo {
            get {
                var values = _httpAccessor.HttpContext.GetRouteData().Values;
                var key = (values["controller"] + "&" + values["action"]).ToLower();

                if(!_demoByRouteIndex.ContainsKey(key))
                    return null;

                return _demoByRouteIndex[key];
            }
        }

        public string GetBreadcrumb(Demo demo, string formatString) {
            if(!DemoUtils.DISPLAY_BREADCRUMB)
                return demo.Title;
            var parentGroups = _parentGroupsIndex[demo];
            return String.Format(
                formatString,
                (parentGroups.LastOrDefault(i => i.Breadcrumb) ?? parentGroups[0]).Name,
                demo.Title
            );
        }

        public IEnumerable<DemoTreeNode> ToHierarchicalDataSource(IUrlHelper urlHelper, string currentController, string currentAction) {
            var nodeStack = new Stack<DemoTreeNode>();

            nodeStack.Push(new DemoTreeNode {
                Items = new List<DemoTreeNode>()
            });

            void OnGroupStart(DemoGroup g) {
                nodeStack.Push(new DemoTreeNode {
                    Text = g.Name,
                    Items = new List<DemoTreeNode>()
                });
            }

            void OnGroupEnd() {
                var current = nodeStack.Pop();
                var parent = nodeStack.Peek();

                if(current.Items.Count == 1 && nodeStack.Count > 1)
                    current.Items = null;

                if(!String.IsNullOrEmpty(current.Url))
                    parent.Items.Add(current);
            }

            void OnDemo(Demo d) {
                var req = urlHelper.ActionContext.HttpContext.Request;
                var url = urlHelper.Action(d.Action, d.Controller);

                var active = Equals(d.Controller, currentController) && Equals(d.Action, currentAction);

                url = DemoUtils.KeepQueryString(url, req, "theme");

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

            Walk(OnGroupStart, OnGroupEnd, OnDemo);

            return nodeStack.Peek().Items;
        }

        void Walk(Action<DemoGroup> onGroupStart, Action onGroupEnd, Action<Demo> onDemo) {

            void WalkGroup(DemoGroup group) {
                var childGroups = group.Groups;
                var demos = group.Demos;

                onGroupStart?.Invoke(group);

                if(childGroups != null) {
                    if(demos != null)
                        throw new NotSupportedException();

                    foreach(var g in childGroups)
                        WalkGroup(g);

                } else if(demos != null) {
                    foreach(var d in demos) {
                        if(!d.Hidden)
                            onDemo?.Invoke(d);
                    }
                }

                onGroupEnd?.Invoke();
            }

            foreach(var g in _rootGroups)
                WalkGroup(g);
        }

        string ReadDemoDescriptionFile(Demo demo) {
            var path = Path.Combine(_contentRootPath, "wwwroot", "Descr", demo.Controller, demo.Action + ".md");

            if(!File.Exists(path))
                path = Path.Combine(_contentRootPath, "wwwroot", "Descr", "Temp", demo.Controller, demo.Action + ".md");

            if(File.Exists(path))
                return File.ReadAllText(path);

            return null;
        }

        void PopulateFiles(Demo demo) {
            demo.Files.Add(new DemoSourceFile(_contentRootPath, demo.ControllerPath, new ActionTextParser(demo.Action)));
            demo.Files.Add(new DemoSourceFile(_contentRootPath, demo.ViewPath));

            var additionalCssFile = new DemoSourceFile(_contentRootPath, demo.AdditionalCssUrl.Replace("~/", "wwwroot/"));
            if(File.Exists(additionalCssFile.GetRealPath()))
                demo.Files.Add(additionalCssFile);

            if(demo.MvcAdditionalFiles != null) {
                foreach(var f in demo.MvcAdditionalFiles)
                    demo.Files.Add(new DemoSourceFile(_contentRootPath, "." + Regex.Replace(f, "^/(Content|Scripts)/", "/wwwroot/")));
            }

            int GetPreSortKey(string name) {
                if(name.EndsWith(".cshtml"))
                    return 1;

                if(name.EndsWith(demo.Controller.Replace("_", "") + "Controller.cs"))
                    return 2;

                if(name.EndsWith("Controller.cs"))
                    return 3;

                if(name.EndsWith(".css"))
                    return 11;

                return 10;
            }

            demo.Files.Sort((x, y) => {
                var result = GetPreSortKey(x.Name).CompareTo(GetPreSortKey(y.Name));
                if(result != 0)
                    return result;
                return x.Name.CompareTo(y.Name);
            });
        }

    }

}
