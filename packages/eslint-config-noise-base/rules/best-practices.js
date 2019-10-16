module.exports = {
  rules: {
    // Enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // Enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['error'],

    // Require return statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],

    // Require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default parameters to be last
    'default-param-last': 'error',

    // Encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // Require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // Make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // Enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'error',

    // Disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': ['error', { allowElseIf: false }],

    // Disallow empty functions, except for standalone funcs/arrows
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': [
      'error',
      { allow: ['arrowFunctions', 'functions', 'methods'] },
    ],

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow use of eval()
    'no-eval': 'error',

    // Disallow adding to native types
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // Disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'error',

    // Disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'error',

    // Disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // Disallow usage of __iterator__ property
    'no-iterator': 'error',

    // Disallow use of labels for anything other then loops and switches
    'no-labels': 'error',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'error',

    // Disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'error',
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [1],
        ignoreArrayIndexes: true,
      },
    ],

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // Disallow use of (old style) octal literals
    'no-octal': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters and object parameter
    // manipulationexcept for specific exclusions.
    // https://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
          'staticContext', // for ReactRouter context
        ],
      },
    ],

    // Disallow usage of __proto__ property
    'no-proto': 'error',

    // Disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // Disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow redundant `return await`
    'no-return-await': 'error',

    // Disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // Disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', { props: true }],

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Disallow use of comma operator
    'no-sequences': 'error',

    // Restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // Disallow usage of expressions in statement position
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // Disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',

    // Disallow use of the with statement
    'no-with': 'error',

    // Require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Suggest using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    // TODO: this cannot be polyfilled, so it can only be enabled once all evergreen browsers support this
    'prefer-named-capture-group': 'off',

    // Disallow use of the RegExp constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'error',

    // Require use of the second argument for parseInt()
    radix: 'error',

    // Require or disallow Yoda conditions
    yoda: 'error',
  },
};
