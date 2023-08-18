module.exports.translate = function (data) {
  const jsCode = ts.transpileModule(
    data.source,
    {
      target: ts.ScriptTarget.ES5,
      module: ts.ModuleKind.None,
    },
  ).outputText;

  return `${jsCode}`;
};
