# ESLint Config Noise Node

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for Node.js development.

## Plugins

Includes these plugins.

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install

```sh
npm install --save-dev eslint eslint-config-noise-react
npx install-peerdeps --dev eslint-config-noise-react
```

## Configure

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

_.eslintrc_

```json
{ "extends": ["eslint-config-noise-node"], "root": true };
```

### Components / attributes / labels

Some rules depend on proper configuration. Make sure to configure these when you wrap relevant DOM elements.

Eg. with Gatsby and Next.js you'd use a `Link` component instead of an `a` element.

_.eslintrc.js_

```js
const { extendRules } = require('eslint-noise-utils');
const { pluginJsxA11y } = require('eslint-config-noise-react/rules');
module.exports = {
  rules: extendRules(pluginJsxA11y, {
    'jsx-a11y/anchor-has-content': { components: ['Link'] },
    'jsx-a11y/anchor-is-valid': { components: ['Link'], specialLink: ['to'] },
    'jsx-a11y/control-has-associated-label': {
      controlComponents: [],
      labelAttributes: ['label'],
    },
    'jsx-a11y/heading-has-content': { components: [] },
    'jsx-a11y/img-redundant-alt': { components: ['Image'] },
    'jsx-a11y/interactive-supports-focus': { tabbable: [] },
    'jsx-a11y/label-has-associated-control': {
      controlComponents: [],
      labelAttributes: [],
      labelComponents: [],
    },
    'jsx-a11y/media-has-caption': { audio: [], track: [], video: [] },
  }),
};
```
