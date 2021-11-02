'use strict';

module.exports = {
  extends: ['../browser', '../node'].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
