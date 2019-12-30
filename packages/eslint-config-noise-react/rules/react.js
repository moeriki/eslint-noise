'use strict';

const { style: baseStyleRules } = require('eslint-config-noise/rules');
const { extendRule } = require('eslint-config-noise/utils');

module.exports = {
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate',
        ],
      },
    ],
    'no-underscore-dangle': extendRule(baseStyleRules, {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
    }),
  },
};
