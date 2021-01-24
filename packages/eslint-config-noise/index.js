'use strict';

module.exports = {
  extends: [
    ...[
      './rules/best-practices',
      './rules/errors',
      './rules/es6',
      './rules/plugin-import',
      './rules/plugin-promise',
      './rules/plugin-unicorn',
      './rules/style',
      './rules/variables',
    ].map(require.resolve),
  ],
  env: { commonjs: true, es2021: true },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  reportUnusedDisableDirectives: true,
  rules: {
    strict: ['error', 'global'],
  },
};
