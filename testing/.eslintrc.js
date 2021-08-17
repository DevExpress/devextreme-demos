module.exports = {
  extends: [
    'devextreme/spell-check',
    'devextreme/javascript',
    'devextreme/testcafe',
  ],
  // eslint-disable-next-line spellcheck/spell-checker
  globals: {
    testUtils: true,
  },
  rules: {
    curly: [
      'error',
      'multi-line',
    ],
    indent: [
      'error',
      2,
    ],
  },
};
