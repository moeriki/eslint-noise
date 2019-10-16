module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/plugin-import',
    './rules/plugin-promise',
    './rules/plugin-unicorn',
    './rules/variables',
    'plugin:prettier/recommended',
  ],
  env: { es6: true, node: true },
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  rules: {
    strict: ['error', 'never'],
    'prettier/prettier': [
      'error',
      { arrowParens: 'always', singleQuote: true, trailingComma: 'all' },
    ],
  },
};
