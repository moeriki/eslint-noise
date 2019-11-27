'use strict';

module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript's `noFallthroughCasesInSwitch` option is more robust
    'default-case': 'off',

    // 'tsc' already handles this
    'no-dupe-class-members': 'off',
    'no-undef': 'off',

    // Add TypeScript specific rules (and turn off ESLint equivalents)
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'none', ignoreRestSiblings: true },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, typedefs: false },
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // plugin rules
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    '@typescript-eslint/ban-ts-ignore': 'error',

    '@typescript-eslint/ban-types': 'error',

    '@typescript-eslint/class-name-casing': 'error',

    '@typescript-eslint/consistent-type-assertions': 'warn',

    '@typescript-eslint/explicit-function-return-type': 'error',

    '@typescript-eslint/interface-name-prefix': 'error',

    '@typescript-eslint/no-empty-interface': 'error',

    '@typescript-eslint/no-explicit-any': 'warn',

    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/no-misused-new': 'error',

    '@typescript-eslint/no-namespace': 'error',

    '@typescript-eslint/no-non-null-assertion': 'warn',

    '@typescript-eslint/no-this-alias': 'error',

    '@typescript-eslint/no-var-requires': 'error',

    '@typescript-eslint/prefer-namespace-keyword': 'error',

    '@typescript-eslint/triple-slash-reference': 'error',
  },
};
