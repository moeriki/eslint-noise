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
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    project: 'tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    'consistent-return': 'off',
    'no-unsafe-optional-chaining': 'off',
    'valid-jsdoc': 'off',

    'import/no-unresolved': 'off',
  },
};
