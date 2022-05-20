'use strict';

module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    camelcase: 'off',
    'import/no-anonymous-default-export': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: ['i18n-t'],
        registeredComponentsOnly: false,
      },
    ],
    'vue/custom-event-name-casing': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always' },
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/padding-line-between-blocks': 'error',
  },
};
