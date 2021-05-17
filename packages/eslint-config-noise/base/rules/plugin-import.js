'use strict';

const MODULE_EXTENSIONS = ['.js', '.mjs'];

module.exports = {
  plugins: ['import'],
  rules: {
    // Ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/default': 'error',

    // Disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', mjs: 'never', ts: 'never', tsx: 'never' },
    ],

    // Disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // Ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/named': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'error',

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // Reports if a module's default export is unnamed
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': [
      'error',
      { allowCallExpression: false },
    ],

    // Forbid cyclical dependencies between modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: '∞' }],

    // Disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // Disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'error',

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // Paths are treated both as absolute paths, and relative to `process.cwd()`
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/jest.setup.js', // jest setup
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js', // protractor config
          '**/wallaby.js', // Wallaby config
          '**/.eslintrc.js', // ESLint config
          '**/{script,scripts,util,utils}/**',
          'wallaby.js', // Wallaby config
        ],
        optionalDependencies: false,
      },
    ],

    // Prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': [
      'off',
      {
        allow: [
          '**/*.{css,sass,scss,less}',
          '**/*.{gif,jpg,jpeg,png,svg,webp}',
          '*/cjs',
          '*/es{m,}',
          '*/fp',
          '*/register',
          '*/testing',
          '@storybook/*/types-*',
          'eslint-config-*/rules',
          'firebase/{analytics,app,auth,database,firestore}',
          'lodash/**',
          'next/{amp,app,config,document,dynamic,error,head,image,link,router}',
          'uuid/v?',
        ],
      },
    ],

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Warn on accessing default export property names that are also named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // Prevent importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Use this rule to prevent importing packages through relative paths.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-packages.md
    'import/no-relative-packages': 'error',

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Prevent unassigned imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // Importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': [
      'error',
      { allow: ['**/*.css', 'firebase/{analytics,auth,database,firestore}'] },
    ],

    // Ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { caseSensitive: true, commonjs: true }],

    // Ensures that there are no useless path segments
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': ['error', { commonjs: true }],

    // Forbid Webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    // builtin: 'fs', 'path'
    // external: 'chalk', 'lodash'
    // internal: 'src/foo'
    // parent: '../foo', '../foo/other'
    // sibling: './bar', './bar/baz'
    // index: './'
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: false, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'index', 'sibling'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/core-modules': [],
    'import/extensions': MODULE_EXTENSIONS,
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    'import/resolver': {
      node: { extensions: [...MODULE_EXTENSIONS, '.json'] },
    },
  },
};
