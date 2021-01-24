'use strict';

module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'error',

    // Enforce Rules of Hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',
  },
};
