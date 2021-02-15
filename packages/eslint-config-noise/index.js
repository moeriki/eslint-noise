'use strict';

module.exports = {
  extends: [
    ...[
      './base/eslint',
      './base/plugin-import',
      './base/plugin-promise',
      './base/plugin-unicorn',
    ].map(require.resolve),
  ],
  env: { commonjs: true, es2021: true },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  reportUnusedDisableDirectives: true,
  rules: {
    strict: ['error', 'global'],
  },
};
