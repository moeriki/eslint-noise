'use strict';

module.exports = {
  extends: [
    ...['./rules/plugin-import', './rules/plugin-typescript-eslint'].map(
      require.resolve,
    ),
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // typescript-eslint parser specific options
    warnOnUnsupportedTypeScriptVersion: true,
  },
};
