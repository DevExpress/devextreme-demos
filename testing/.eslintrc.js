module.exports = {
  extends: ['devextreme/javascript'],
  globals: {
    test: true,
    fixture: true,
  },
  rules: {
    // Allow using any types of dependencies
    'import/no-extraneous-dependencies': 'off',

    // Allow modifying parameters in event handlers to test these use cases
    'no-param-reassign': ['error', { props: false }],

    // Allow `await` inside of loops. This is a common case for TestCafe tests
    'no-await-in-loop': 'off',
  },
};
