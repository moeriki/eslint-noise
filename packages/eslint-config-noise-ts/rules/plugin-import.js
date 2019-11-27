'use strict';

const MODULE_EXTENSIONS = ['.js', '.mjs', '.ts'];

module.exports = {
  settings: {
    'import/extensions': MODULE_EXTENSIONS,
    'import/resolver': {
      node: { extensions: [...MODULE_EXTENSIONS, '.json'] },
    },
  },
};
