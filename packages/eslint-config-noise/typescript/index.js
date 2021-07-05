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
    // typescript-eslint parser specific options
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'consistent-return': 'off',
    'no-unsafe-optional-chaining': 'off',
    'valid-jsdoc': 'off',
  },
};
