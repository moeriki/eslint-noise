'use strict';

const { pluginImport } = require('./packages/eslint-config-noise/rules');
const { extendRule } = require('./packages/eslint-config-noise/utils');

module.exports = {
  extends: ['noise', 'noise-node'],
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true },
    },
  ],
  root: true,
  rules: {
    'no-magic-numbers': 'off',
    'import/no-internal-modules': extendRule(
      pluginImport.rules['import/no-internal-modules'],
      { allow: ['**/eslint-config-noise/**'] },
    ),
    'unicorn/string-content': 'off',
  },
};
