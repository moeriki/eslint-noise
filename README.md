# ESLint Config Noise

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Can be used for **Node.js** development.

## Why

I used to extend the [Airbnb base config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base), but found myself disabling the same rules, adding the same plugins, over and over again.

## Plugins

All packages include these plugins.

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Packages

- [eslint-config-noise-node](./packages/eslint-config-noise-node/README.md)

## Planned features

- TypeScript support
- Browser / React packages
