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

    // Require Array.isArray() instead of instanceof Array
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
    'unicorn/no-array-instanceof': 'error',

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

    // Disallow unreadable array destructuring
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unreadable-array-destructuring.md
    'unicorn/no-unreadable-array-destructuring': 'error',

    // Disallow unused object properties
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'error',

    // Disallow useless `undefined`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
    'unicorn/no-useless-undefined': 'error',

    // Disallow number literals with zero fractions or dangling dots
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-zero-fractions.md
    'unicorn/no-zero-fractions': 'error',

    // TODO [engine:node@>=12] enable
    // Enforce the style of numeric separators by correctly grouping digits
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/numeric-separators-style.md
    // 'unicorn/numeric-separators-style': 'error',

    // Prefer `.find(…)` over the first element from `.filter(…)`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-array-find.md
    'unicorn/prefer-array-find': 'error',

    // Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md
    'unicorn/prefer-date-now': 'error',

    // Prefer `.flatMap(…)` over `.map(…).flat()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-flat-map.md
    'unicorn/prefer-flat-map': 'error',

    // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-includes.md
    'unicorn/prefer-includes': 'error',

    // Enforce the use of `Math.trunc` instead of bitwise operators
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-math-trunc.md
    'unicorn/prefer-math-trunc': 'error',

    // Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()` and `Array#splice()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
    'unicorn/prefer-negative-index': 'error',

    // Prefer `Number` static properties over global ones
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-number-properties.md
    'unicorn/prefer-number-properties': 'error',

    // Prefer omitting the `catch` binding parameter
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
    'unicorn/prefer-optional-catch-binding': 'error',

    // Prefer `String#replaceAll()` over regex searches with the global flag
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-replace-all.md
    'unicorn/prefer-replace-all': 'error',

    // Prefer the spread operator over Array.from()
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'error',

    // Prefer `String#startsWith()` & `String#endsWith()` over more complex alternatives
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
    'unicorn/prefer-starts-ends-with': 'error',

    // Prefer `String#slice()` over `String#substr()` and `String#substring()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-string-slice.md
    'unicorn/prefer-string-slice': 'error',

    // Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-trim-start-end.md
    'unicorn/prefer-trim-start-end': 'error',

    // Enforce throwing `TypeError` in type checking conditions
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
    'unicorn/prefer-type-error': 'error',

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

    // Require new when throwing an error
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
    'unicorn/throw-new-error': 'error',
  },
};
