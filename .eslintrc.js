'use strict';

const { extendRule } = require('./packages/eslint-config-noise/utils');
const { pluginImport } = require('./packages/eslint-config-noise/rules');

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
    'import/no-internal-modules': extendRule(
      pluginImport.rules['import/no-internal-modules'],
      { allow: ['**/eslint-config-noise/**'] },
    ),
    'no-magic-numbers': 'off',
  },
};
