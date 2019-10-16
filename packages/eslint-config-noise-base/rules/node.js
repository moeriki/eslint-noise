module.exports = {
  rules: {
    // Require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Disallow use of new operator with the require function
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Disallow use of synchronous methods (off by default)
    'no-sync': 'error',
  },
};
