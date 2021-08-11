'use strict';

module.exports = {
  plugins: ['unicorn'],
  rules: {
    // Enforce the use of regex shorthands to improve readability
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/better-regex.md
    'unicorn/better-regex': 'error',

    // Enforce a specific parameter name in catch clauses
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
    'unicorn/catch-error-name': 'error',

    // Use destructured variables over properties
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-destructuring.md
    'unicorn/consistent-destructuring': 'error',

    // Move function definitions to the highest possible scope
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'off',

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
    'unicorn/expiring-todo-comments': [
      'error',
      { allowWarningComments: false },
    ],

    // Enforce explicitly comparing the length property of a value
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
    'unicorn/explicit-length-check': 'error',

    // Enforce a case style for filenames
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'error',

    // Enforce importing index files with `.`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
    'unicorn/import-index': 'error',

    // Enforce specific import styles per module
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-style.md
    'unicorn/import-style': 'error',

    // Enforce the use of `new` for all builtins, except `String`, `Number` and Bool`ean
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-for-builtins.md
    'unicorn/new-for-builtins': 'error',

    // Enforce specifying rules to disable in eslint-disable comments
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'error',

    // Prefer `for…of` over `Array#forEach(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    'unicorn/no-array-for-each': 'error',

    // Disallow using the `this` argument in array methods
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-method-this-argument.md
    'unicorn/no-array-method-this-argument': 'error',

    // Enforce combining multiple `Array#push()` into one call
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-push-push.md
    'unicorn/no-array-push-push': 'error',

    // Disallow `new Array()`
    'no-array-constructor': 'off',
    'unicorn/no-new-array': 'error',

    // Require Array.isArray() instead of instanceof Array
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-instanceof-array.md
    'unicorn/no-instanceof-array': 'error',

    // Do not use leading/trailing space between console.log parameters
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-console-spaces.md
    'unicorn/no-console-spaces': 'error',

    // Enforce the use of Unicode escapes instead of hexadecimal escapes
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
    'unicorn/no-hex-escape': 'error',

    // Disallow `if` statements as the only statement in `if` blocks without `else`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-lonely-if.md
    'unicorn/no-lonely-if': 'error',

    // Disallow the use of objects as default parameters
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-object-as-default-parameter.md
    'unicorn/no-object-as-default-parameter': 'error',

    // Forbid classes that only have static members
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-static-only-class.md
    'unicorn/no-static-only-class': 'error',

    // Disallow assigning `this` to a variable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-this-assignment.md
    'unicorn/no-this-assignment': 'error',

    // Disallow unreadable array destructuring
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Disallow unused object properties
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // Disallow useless array length check
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-length-check.md
    'unicorn/no-useless-length-check': 'error',

    // Disallow useless spread
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-spread.md
    'unicorn/no-useless-spread': 'error',

    // Disallow useless `undefined`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'error',

    // Disallow number literals with zero fractions or dangling dots
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    // Enforce the style of numeric separators by correctly grouping digits
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/numeric-separators-style.md
    'unicorn/numeric-separators-style': [
      'error',
      { onlyIfContainsSeparator: true },
    ],

    // Prefer `.find(…)` over the first element from `.filter(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
    'unicorn/prefer-array-find': 'error',

    // Prefer `Array#flat()` over legacy techniques to flatten arrays
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-array-flat.md
    'unicorn/prefer-array-flat': 'error',

    // Prefer `.flatMap(…)` over `.map(…).flat()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-flat-map.md
    'unicorn/prefer-array-flat-map': 'error',

    // Prefer `Array#indexOf()` over `Array#findIndex()` when looking for the index of an item
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-index-of.md
    'unicorn/prefer-array-index-of': 'error',

    // Prefer `.some(…)` over `.find(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-some.md
    'unicorn/prefer-array-some': 'error',

    // Prefer `.at()` method for index access and `String#charAt()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
    'unicorn/prefer-at': 'error',

    // Prefer default parameters over reassignment
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-default-parameters.md
    'unicorn/prefer-default-parameters': 'error',

    // Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md
    'unicorn/prefer-date-now': 'error',

    // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // Enforce the use of `Math.trunc` instead of bitwise operators
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-math-trunc.md
    'unicorn/prefer-math-trunc': 'error',

    // Prefer JavaScript modules (ESM) over CommonJS
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
    // 'unicorn/prefer-module': 'error',

    // Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()` and `Array#splice()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-negative-index': 'error',

    // Prefer `Number` static properties over global ones
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md
    'unicorn/prefer-number-properties': 'error',

    // Prefer omitting the `catch` binding parameter
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding': 'error',

    // Prefer borrowing methods from the prototype instead of methods from an instance
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-prototype-methods.md
    'unicorn/prefer-prototype-methods': 'error',

    // Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-regexp-test.md
    'unicorn/prefer-regexp-test': 'error',

    // Prefer the spread operator over Array.from()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'error',

    // Prefer `String#replaceAll()` over regex searches with the global flag
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-replace-all.md
    'unicorn/prefer-string-replace-all': 'error',

    // Prefer `String#slice()` over `String#substr()` and `String#substring()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',

    // Prefer `String#startsWith()` & `String#endsWith()` over more complex alternatives
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-starts-ends-with.md
    'unicorn/prefer-string-starts-ends-with': 'error',

    // Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-trim-start-end.md
    'unicorn/prefer-string-trim-start-end': 'error',

    // Prefer ternary expressions over simple `if-else` statements
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md#options
    'unicorn/prefer-ternary': ['error', 'only-single-line'],

    // Prefer top-level await over top-level promises and async function calls
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
    // TODO [eslint@>=8] Enable when ESLint 8 is released. It will add support for top-level `await`.
    'unicorn/prefer-top-level-await': 'off',

    // Enforce throwing `TypeError` in type checking conditions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

    // Prefer `switch` over multiple `else-if`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
    'unicorn/prefer-switch': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': [
      'error',
      {
        extendDefaultReplacements: false,
        replacements: {
          acc: { accumulator: true },
          arg: { argument: true },
          args: { argumentz: true },
          arr: { array: true },
          attr: { attribute: true },
          attrs: { attributes: true },
          btn: { button: true },
          cb: { callback: true },
          conf: { config: true },
          // ctx: {context: true },
          cur: { current: true },
          curr: { current: true },
          db: { database: true },
          dest: { destination: true },
          def: { defer: true, deferred: true, define: true, definition: true },
          // dev: { development: true },
          dir: { direction: true, directory: true },
          dirs: { directories: true },
          doc: { document: true },
          docs: { documentation: true, documents: true },
          e: { error: true, event: true },
          el: { element: true },
          elem: { element: true },
          // env: { environment: true },
          envs: { environments: true },
          err: { error: true },
          ev: { event: true },
          evt: { event: true },
          ext: { extension: true },
          exts: { extensions: true },
          fn: { function: true },
          // func: { function: true },
          i: { index: true },
          idx: { index: true },
          j: { index: true },
          len: { length: true },
          // lib: { library: true },
          mod: { module: true },
          msg: { message: true },
          num: { number: true },
          obj: { object: true },
          opts: { options: true },
          param: { parameter: true },
          params: { parameters: true },
          pkg: { package: true },
          prev: { previous: true },
          prod: { product: true, production: true },
          prop: { property: true },
          // props: { properties: true },
          ref: { reference: true },
          refs: { references: true },
          rel: { related: true, relationship: true, relative: true },
          // req: { request: true },
          // res: { response: true, result: true },
          ret: { returnValue: true },
          retval: { returnValue: true },
          sep: { separator: true },
          src: { source: true },
          stdDev: { standardDeviation: true },
          str: { string: true },
          tbl: { table: true },
          temp: { temporary: true },
          tit: { title: true },
          tmp: { temporary: true },
          val: { value: true },
          var: { variable: true },
          vars: { variables: true },
          ver: { version: true },
        },
      },
    ],

    // Enforce using the separator argument with `Array#join()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-array-join-separator.md
    'unicorn/require-array-join-separator': 'error',

    // Enforce using the digits argument with `Number#toFixed()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/require-number-to-fixed-digits-argument.md
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    // Require new when throwing an error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',
  },
};
