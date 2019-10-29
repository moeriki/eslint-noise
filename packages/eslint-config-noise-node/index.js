module.exports = {
  extends: ['plugin:node/recommended', 'noise-base'],
  rules: {
    // Disallow string concatenation with __dirname and __filename
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // This is enabled by plugin-node. We will use a unicorn rule for this
    'no-process-exit': 'off',

    // Disallow use of synchronous methods (off by default)
    'no-sync': 'error',

    // Prefer 'module.exports'
    'node/exports-style': ['error', 'module.exports'],

    // Node has many deprecated APIs
    'node/no-deprecated-api': 'error',

    // Disable these recommended rules because we use 'eslint-plugin-import'
    'node/no-extraneous-import': 'off',
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',

    // Disallow unsupported ECMAScript built-ins on the specified version
    'node/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    'node/no-unsupported-features/es-syntax': 'error',

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

    // I don't understand the purpose
    'node/process-exit-as-throw': 'off',

    // Do not use a for loop that can be replaced with a for-of loop
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'error',

    // Enforce the use of Buffer.from() and Buffer.alloc() instead of the deprecated new Buffer()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
    'unicorn/no-new-buffer': 'error',

    // Disallow process.exit()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'error',
  },
};
