'use strict';

module.exports = {
  extends: [
    ...['./rules/plugin-import', './rules/plugin-typescript-eslint'].map(
      require.resolve,
    ),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    // typescript-eslint parser specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'valid-jsdoc': 'off',
  },
};
