'use strict';

module.exports = {
  rules: {
    // Require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Disallow use of new operator with the require function
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',
  },
};
