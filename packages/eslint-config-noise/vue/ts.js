'use strict';

module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
  rules: {
    'no-undef': 'off',
  },
};
