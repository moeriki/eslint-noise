module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: { es6: true, node: true },
  parserOptions: { ecmaVersion: 2020 },
  root: true,
  rules: { 'prettier/prettier': 'error' },
};
