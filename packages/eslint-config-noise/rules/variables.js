'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow specific globals
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(
      confusingBrowserGlobals,
    ),

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      { args: 'after-used', ignoreRestSiblings: true, vars: 'all' },
    ],

    // Disallow use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', { functions: false }],
  },
};
