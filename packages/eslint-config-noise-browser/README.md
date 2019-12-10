# ESLint Config Noise Browser

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for browser development.

## Install

```sh
npm install --save-dev eslint eslint-config-noise eslint-config-noise-browser
npx install-peerdeps --dev eslint-config-noise
```

## Configure

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

_.eslintrc_

```json
{
  "extends": ["noise", "noise-browser"],
  "root": true
};
```

### Variants

Some rules could be unnecessary or annoying in certain scenarios. These variants can be applied on top of the base config.

#### IE11

Need to support IE11.

_.eslintrc_

```json
{
  "extends": ["noise", "noise-browser", "noise-browser/ie11"],
  "root": true
}
```
