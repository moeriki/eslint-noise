'use strict';

module.exports = {
  extends: ['plugin:node/recommended'],
  // Override `plugin:node/recommended` who sets `ecmaVersion`
  parserOptions: { ecmaVersion: 'latest' },
  env: { node: true },
  rules: {
    // Disallow string concatenation with __dirname and __filename
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-path-concat.md
    'node/no-path-concat': 'error',

    // This is enabled by plugin-node. We will use a unicorn rule for this
    'no-process-exit': 'off',
    'node/no-process-exit': 'off',

    // Disallow use of synchronous methods
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md
    'node/no-sync': ['error', { allowAtRootLevel: true }],

    // Prefer 'module.exports'
    'node/exports-style': ['error', 'module.exports'],

    // Require all requires be top-level
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/global-require.md
    'node/global-require': 'error',

    // Node has many deprecated APIs
    'node/no-deprecated-api': 'error',

    // Disallow use of new operator with the require function
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-new-require.md
    'node/no-new-require': 'error',

    // Disable these recommended rules because we use 'eslint-plugin-import'
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',

    // Disallow unsupported ECMAScript built-ins on the specified version
    'node/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],

    // Disallow unsupported Node.js built-in APIs on the specified version
    'node/no-unsupported-features/node-builtins': 'error',

    // Don't allow these globals to be imported
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],

    // Force the usage of the Promise API of 'dns' and 'fs' modules
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',

    // Make process.exit() expressions the same code path as throw
    'node/process-exit-as-throw': 'error',

    // Do not use a for loop that can be replaced with a for-of loop
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'error',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'error',

    // Disallow process.exit()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'error',

    // Prefer using the `node:` protocol when importing Node.js builtin modules
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
    // 'unicorn/prefer-node-protocol': 'error',
  },
};
