using System.Text.RegularExpressions;

namespace DevExtreme.MVC.Demos.DemoShell {
    public class ActionTextParser : IParser {
        readonly string _actionName;

        public ActionTextParser(string actionName) {
            _actionName = actionName;
        }

        public string Parse(string text) {
            var actionNameRe = Regex.Escape(_actionName);

            var headMatch = Regex.Match(text, @"^.+?class.+?Controller.+?{", RegexOptions.Singleline);
            var tailMatch = Regex.Match(text, @" +}\s*}\s*$", RegexOptions.Singleline);

            if(headMatch.Success && tailMatch.Success) {
                var actionMatch = Regex.Match(text, $@"#region +{actionNameRe}\s+?\n(.+?)\s+#endregion", RegexOptions.Singleline);

                if(!actionMatch.Success)
                    actionMatch = Regex.Match(text, $@"\s*?\n(( *)[^\n]+?ActionResult +{actionNameRe}\W.+?\n\2}})", RegexOptions.Singleline);

                if(actionMatch.Success)
                    return headMatch.Value + "\n\n" + actionMatch.Groups[1].Value + "\n\n" + tailMatch.Value.TrimEnd();
            }

            return text;
        }
    }
}
