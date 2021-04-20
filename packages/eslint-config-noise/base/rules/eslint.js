'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const bestPractices = {
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

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

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

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

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
      ignore: [-1, 0, 1],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
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
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for event.returnvalue
        'event', // for event.returnvalue
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ],
      ignorePropertyModificationsForRegex: [],
      props: true,
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
      message: 'arguments.callee is deprecated',
      object: 'arguments',
      property: 'callee',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'global',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'self',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'window',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'global',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'self',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN',
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineGetter__',
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineSetter__',
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

  // Restrict what can be thrown as an exception
  'no-throw-literal': 'error',

  // Disallow usage of expressions in statement position
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: true,
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

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'error',

  // Require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Disallow use of the RegExp constructor in favor of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': 'error',

  // Require use of the second argument for parseInt()
  radix: 'error',

  // Require or disallow Yoda conditions
  yoda: 'error',
};

const errors = {
  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // Disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // Disallow assignment in conditional expressions
  'no-cond-assign': ['error', 'always'],

  // Disallow use of console
  'no-console': 'warn',

  // Disallow use of constant expressions in conditions
  'no-constant-condition': 'warn',

  // Disallow control characters in regular expressions
  'no-control-regex': 'error',

  // Disallow use of debugger
  'no-debugger': 'error',

  // Disallow duplicate arguments in functions
  'no-dupe-args': 'error',

  // Disallow duplicate conditions in `if-else-if` chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // Disallow duplicate keys when creating object literals
  'no-dupe-keys': 'error',

  // Disallow a duplicate case label.
  'no-duplicate-case': 'error',

  // Disallow empty statements
  'no-empty': 'error',

  // Disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 'error',

  // Disallow assigning to the exception in a catch block
  'no-ex-assign': 'error',

  // Disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // Disallow overwriting functions written as function declarations
  'no-func-assign': 'error',

  // Disallow assigning to imported bindings
  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // Disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // Disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // Disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'error',

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // Disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 'error',

  // Disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // Disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 'error',

  // Disallow returning values from setter
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // Disallow sparse arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 'error',

  // Disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // Disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],

  // Disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': 'error',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  'require-atomic-updates': 'error',

  // Disallow comparisons with the value NaN
  'use-isnan': [
    'error',
    { enforceForIndexOf: true, enforceForSwitchCase: true },
  ],

  // Ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': [
    'error',
    {
      prefer: {
        arg: 'param',
        argument: 'param',
        class: 'constructor',
        return: 'return',
        virtual: 'abstract',
      },
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        Object: 'object',
        String: 'string',
        Symbol: 'symbol',
      },
      requireParamDescription: false,
      requireReturn: false,
      requireReturnDescription: false,
    },
  ],

  // Ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
};

const es6 = {
  // Verify `super()` callings in constructors
  'constructor-super': 'error',

  // Disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': ['error', { allowParens: true }],

  // Disallow modifying variables that are declared using const
  'no-const-assign': 'error',

  // Disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // Disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // Disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // Disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // Disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // Disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false },
  ],

  // Require let or const instead of var
  'no-var': 'error',

  // Require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    { avoidQuotes: true, ignoreConstructors: false },
  ],

  // Suggest using of const declaration for variables that are never modified after declared
  'prefer-const': [
    'error',
    { destructuring: 'any', ignoreReadBeforeAssign: true },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    // `array` needs to be false in all cases because it would otherwise
    // Conflict with 'unicorn/no-unreadable-array-destructuring'
    {
      AssignmentExpression: { array: false, object: false },
      VariableDeclarator: { array: false, object: true },
    },
    { enforceForRenamedProperties: false },
  ],

  // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // Suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // Disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',
};

const style = {
  // Require camel case names
  camelcase: [
    'error',
    {
      ignoreDestructuring: false,
      ignoreGlobals: true,
      ignoreImports: true,
      properties: 'never',
    },
  ],

  // Requires function names to match the name of the variable or property to
  // which they are assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': [
    'error',
    'always',
    { considerPropertyDescriptor: true, includeCommonJSModuleExports: false },
  ],

  // Require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': ['error', 'as-needed'],

  // Require or disallow newlines around directives
  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': ['error', { after: 'always', before: 'always' }],

  // Require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: false },
  ],

  // Require a capital letter for constructors
  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      newIsCap: true,
      newIsCapExceptions: [],
    },
  ],

  // Disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // Disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // Disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'off', // NOTE: We use unicorn/no-lonely-if

  // Disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // Disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'error',

  // Disallow use of the Object constructor
  'no-new-object': 'error',

  // Disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': 'error',

  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': ['error', 'SequenceExpression'],

  // Disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: ['_id', '_', '__'],
      allowAfterSuper: true,
      allowAfterThis: true,
      allowFunctionParams: true,
      enforceInMethodNames: true,
    },
  ],

  // Disallow the use of Boolean literals in conditional expressions
  // Also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // Allow just one var statement per function
  'one-var': ['error', 'never'],

  // Require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // Require using arrow functions for callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

  // Disallow the use of `Math.pow` in favor of the `**` operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // Requires object keys to be sorted
  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // Require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      block: {
        balanced: true,
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'],
      },
      line: { exceptions: ['-', '+'], markers: ['=', '!', '/'] },
    },
  ],
};

const variables = {
  // Disallow deletion of variables
  'no-delete-var': 'error',

  // Disallow specific globals
  'no-restricted-globals': [
    'error',
    'isFinite',
    'isNaN',
    ...confusingBrowserGlobals,
  ],

  // Disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',

  // Disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',

  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 'error',

  // Disallow use of undefined when initializing variables
  'no-undef-init': 'error',

  // Disallow declaration of variables that are not used in the code
  'no-unused-vars': [
    'error',
    { args: 'after-used', ignoreRestSiblings: true, vars: 'all' },
  ],

  // Disallow use of variables before they are defined
  // https://eslint.org/docs/rules/no-use-before-define
  'no-use-before-define': ['error', { functions: false }],
};

module.exports = {
  rules: {
    ...bestPractices,
    ...errors,
    ...es6,
    ...style,
    ...variables,
  },
};
