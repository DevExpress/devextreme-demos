'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: ['devextreme/spell-check', 'eslint:recommended', 'plugin:node/recommended'],
  rules: {
    strict: 0,
    'node/no-unpublished-require': 0,
    'node/no-unsupported-features/node-builtins': ['error', {
      version: '>=10.0.0',
      ignores: [],
    }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'class-methods-use-this': ['warn'],
    'max-len': ['error', { code: 130 }],
    'no-console': 0,
  },
};
