using System.IO;

namespace DevExtreme.MVC.Demos.DemoShell {
    public class DemoSourceFile {
        readonly string _contentRootPath;
        readonly string _filePath;
        readonly IParser _parser;

        public DemoSourceFile(string contentRootPath, string filePath, IParser parser = null) {
            _contentRootPath = contentRootPath;
            _filePath = filePath;
            _parser = parser;
        }

        public string Name => Path.GetFileName(_filePath);

        public string GetRealPath() {
            var result = Path.Combine(_contentRootPath, _filePath);

            if(!File.Exists(result))
                result = Path.Combine(_contentRootPath, "Sources", _filePath + ".txt");

            return result;
        }

        public string Read() {
            var realPath = GetRealPath();

            if(!File.Exists(realPath))
                return "File not found";

            var text = File.ReadAllText(realPath);

            if(_parser != null)
                text = _parser.Parse(text);

            return text;
        }

    }
}
