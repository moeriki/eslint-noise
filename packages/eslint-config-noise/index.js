'use strict';

module.exports = {
  extends: [
    ...[
      './base/best-practices',
      './base/errors',
      './base/es6',
      './base/plugin-import',
      './base/plugin-promise',
      './base/plugin-unicorn',
      './base/style',
      './base/variables',
    ].map(require.resolve),
  ],
  env: { commonjs: true, es2021: true },
  parserOptions: { ecmaVersion: 2021, sourceType: 'module' },
  reportUnusedDisableDirectives: true,
  rules: {
    strict: ['error', 'global'],
  },
};
