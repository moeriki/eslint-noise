'use strict';

module.exports = {
  plugins: ['promise'],
  rules: {
    // Return inside each then() to create readable and reusable Promise chains
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    'promise/always-return': 'off',

    // Enforces the use of `catch()` on un-returned promises.
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
    'promise/catch-or-return': 'error',

    // Avoid calling `cb()` inside of a `then()` (use `util.callbackify()` instead)
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
    'promise/no-callback-in-promise': 'warn',

    // Avoid nested `then()` or `catch()` statements
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
    'promise/no-nesting': 'warn',

    // Avoid calling new on a Promise static method
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
    'promise/no-new-statics': 'error',

    // Avoid using promises inside of callbacks
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
    'promise/no-promise-in-callback': 'error',

    // Disallow return statements in `finally()`
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
    'promise/no-return-in-finally': 'error',

    // Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
    'promise/no-return-wrap': 'error',

    // Enforce consistent param names when creating new promises
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
    'promise/param-names': 'error',

    // Ensures the proper number of arguments are passed to Promise functions
    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'promise/valid-params': 'warn',
  },
};
