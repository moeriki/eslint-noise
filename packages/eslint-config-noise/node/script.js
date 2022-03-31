'use strict';

module.exports = {
  rules: {
    'no-console': 'off',
    strict: 'off',

    'import/no-anonymous-default-export': 'off',

    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/shebang': 'off',

    'promise/always-return': 'off',
    'promise/no-nesting': 'off',

    'unicorn/no-process-exit': 'error',
  },
};
