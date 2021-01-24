# ESLint Config Noise

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Plugins

Includes these plugins.

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install

```sh
npm install --save-dev eslint eslint-config-noise
npx install-peerdeps --dev eslint-config-noise
```

## Configure

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

_.eslintrc_

```json
{ "extends": ["noise"], "root": true }
```
