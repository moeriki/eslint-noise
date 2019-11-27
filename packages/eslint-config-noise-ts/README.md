# ESLint Config Noise TypeScript

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config for TypeScript development.

## Plugins

Includes this plugin.

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## Install

```sh
npm install --save-dev eslint-config-noise eslint-config-noise-ts
npx install-peerdeps --dev eslint-config-noise
npx install-peerdeps --dev eslint-config-noise-ts
```

## Configure

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

_.eslintrc_

```json
{
  "extends": ["noise"],
  "root": true,
  "overrides": [
    "files": ["**/*.ts"],
    "extends": ["noise-ts"],
  ],
}
```
