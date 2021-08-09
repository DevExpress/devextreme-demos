module.exports = {
  extends: [
    'devextreme/spell-check',
    'devextreme/javascript',
    'devextreme/jest',
    'devextreme/testcafe',
  ],
  rules: {
    curly: [
      'error',
      'multi-line',
    ],
    indent: [
      'error',
      2,
    ],
    'react/prop-types': 'off',
    'jest/expect-expect': 'off',
    'jest/no-done-callback': 'off',
  },
};
