'use strict';

module.exports = {
  parserOptions: {
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-undef': 'off',
    'vue/block-lang': ['error', { script: { lang: 'ts' } }],
  },
};
