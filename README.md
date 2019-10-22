# ESLint Config Noise

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript). Includes known ESLint plugins [import](https://github.com/xjamundx/eslint-plugin-promise) and [promise](https://github.com/xjamundx/eslint-plugin-promise). Styling is taken care off by [Prettier](https://prettier.io/).

Can be used for **Node.js** development.

## Why

I used to extend the [Airbnb base config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), but found myself disabling the same rules, adding the same plugins, over and over again.

## Setup

### Node

Includes the ESLint [node](https://github.com/mysticatea/eslint-plugin-node) plugin.

#### Install

```sh
npm install --save-dev eslint eslint-config-noise-node
```

#### Usage

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

##### .eslintrc.js

```js
module.exports = { extends: ['eslint-config-noise-node'], root: true };
```

#### Variants

Some rules could be unnecessary in certain scenarios. These variants need to be applied on top of the base config.

##### Node.js v8

Some rules make no sense when using Node.js v8. Apply this variant to fix this.

_.eslintrc.js_

```js
module.exports = {
  extends: ['eslint-config-noise-node', 'eslint-config-noise-node/8'],
  root: true,
};
```

##### Script

Some rules may be annoying when writing scripts, eg. in your `scripts/` directory. You can improve this experience by extending a the _scripts_ preset.

_.eslintrc.js_

```js
module.exports = {
  extends: ['eslint-config-noise-node'],
  overrides: [
    { files: 'scripts/**', extends: ['eslint-config-noise-node/script'] }
  ],
  root: true,
};
```

## Planned features

* TypeScript support
* Browser / React variant
