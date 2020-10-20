'use strict';

module.exports = {
  extends: [
    ...['./rules/plugin-import', './rules/plugin-typescript-eslint'].map(
      require.resolve,
    ),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    // typescript-eslint parser specific options
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'valid-jsdoc': 'off',
  },
};
