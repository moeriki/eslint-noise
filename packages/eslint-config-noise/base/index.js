'use strict';

module.exports = {
  extends: [
    ...[
      './rules/eslint',
      './rules/plugin-import',
      './rules/plugin-promise',
      './rules/plugin-unicorn',
    ].map(require.resolve),
  ],
  env: { commonjs: true, es2021: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  reportUnusedDisableDirectives: true,
  rules: {
    strict: ['error', 'global'],
  },
};
