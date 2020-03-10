'use strict';

module.exports = {
  extends: [
    ...[
      './rules/best-practices',
      './rules/errors',
      './rules/es6',
      './rules/node',
      './rules/plugin-import',
      './rules/plugin-promise',
      './rules/plugin-unicorn',
      './rules/style',
      './rules/variables',
    ].map(require.resolve),
    'plugin:prettier/recommended',
  ],
  env: { commonjs: true, es2020: true },
  parserOptions: { sourceType: 'module' },
  reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': [
      'error',
      { arrowParens: 'always', singleQuote: true, trailingComma: 'all' },
    ],
    strict: ['error', 'global'],
  },
};
