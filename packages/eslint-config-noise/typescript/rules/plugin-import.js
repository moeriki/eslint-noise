'use strict';

module.exports = {
  settings: {
    'import/extensions': ['.cjs', '.js', '.jsx', '.mjs', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: { alwaysTryTypes: true },
    },
  },
};
