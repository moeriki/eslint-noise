module.exports = {
  env: { es6: true, node: true },
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
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules: {
    'prettier/prettier': [
      'error',
      { arrowParens: 'always', singleQuote: true, trailingComma: 'all' },
    ],
    strict: ['error', 'global'],
  },
};
