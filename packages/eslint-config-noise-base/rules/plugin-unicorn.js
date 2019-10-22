module.exports = {
  plugins: ['unicorn'],
  rules: {
    // Enforce a specific parameter name in catch clauses
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': 'error',

    // Move function definitions to the highest possible scope
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'error',

    // Enforce correct Error subclassing
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
    'unicorn/custom-error-definition': 'error',

    // Enforce passing a message value when throwing a built-in error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // Require escape sequences to use uppercase values
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
    'unicorn/escape-case': 'error',

    // Add expiration conditions to TODO comments
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/expiring-todo-comments.md
    'unicorn/expiring-todo-comments': 'error',

    // Enforce explicitly comparing the length property of a value
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'error',

    // Enforce a case style for filenames
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'error',

    // Enforce importing index files with `.`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'error',

    // Enforce the use of `new` for all builtins, except `String`, `Number` and Bool`ean
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'error',

    // Enforce specifying rules to disable in eslint-disable comments
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'error',

    // Require Array.isArray() instead of instanceof Array
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
    'unicorn/no-array-instanceof': 'error',

    // Do not use leading/trailing space between console.log parameters
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'error',

    // Disallow unreadable array destructuring
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Disallow unused object properties
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // Disallow number literals with zero fractions or dangling dots
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    // Prefer the exponentiation operator over Math.pow()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-exponentiation-operator.md
    'unicorn/prefer-exponentiation-operator': 'error',

    // Prefer `.flatMap(…)` over `.map(…).flat()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
    'unicorn/prefer-flat-map': 'error',

    // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // Prefer the spread operator over Array.from()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'error',

    // Prefer `String#startsWith()` & `String#endsWith()` over more complex alternatives
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'error',

    // Prefer `String#slice()` over `String#substr()` and `String#substring()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',

    // Enforce throwing `TypeError` in type checking conditions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

    // …
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'error',

    // Enforce the use of regex shorthands to improve readability
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
    'unicorn/regex-shorthand': 'error',

    // Require new when throwing an error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',
  },
};