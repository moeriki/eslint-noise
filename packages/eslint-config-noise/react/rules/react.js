'use strict';

const eslint = require('../../base/eslint');
const { extendRules } = require('../../utils');

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
    ...extendRules(eslint.rules, {
      'no-underscore-dangle': {
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      },
    }),
  },
};
