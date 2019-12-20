'use strict';

const TS_EXTENSIONS = ['.ts', '.tsx', '.d.ts'];

const ALL_EXTENSIONS = [...TS_EXTENSIONS, '.js', '.jsx'];

module.exports = {
  settings: {
    'import/extensions': ALL_EXTENSIONS,
    'import/parsers': {
      '@typescript-eslint/parser': TS_EXTENSIONS,
    },
    'import/resolver': {
      node: {
        extensions: ALL_EXTENSIONS,
      },
    },
  },
};
