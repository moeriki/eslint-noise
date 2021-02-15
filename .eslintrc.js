'use strict';

module.exports = {
  extends: ['noise', 'noise/node'],
  overrides: [
    {
      files: ['*.spec.js'],
      env: { jest: true },
    },
  ],
  root: true,
  rules: {
    'no-magic-numbers': 'off',
    'unicorn/string-content': 'off',
  },
};
