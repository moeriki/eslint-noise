# ESLint Config Noise Node

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for Node.js development.

## Plugins

Includes these plugins.

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

## Install

```sh
npm install --save-dev eslint eslint-config-noise-node
npx install-peerdeps --dev eslint-config-noise-node
```

## Configure

There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

_.eslintrc_

```json
{ "extends": ["noise-node"], "root": true }
```

### Variants

Some rules could be unnecessary or annoying in certain scenarios. These variants can be applied on top of the base config.

#### Node.js v8

Some rules make no sense when using Node.js v8. Apply this variant to fix this.

_.eslintrc_

```json
{
  "extends": ["noise-node", "noise-node/8"],
  "root": true
}
```

#### Script

Some rules may be annoying when writing scripts, eg. in your `scripts/` directory. You can improve this experience by extending a the _scripts_ preset.

_.eslintrc_

```json
{
  "extends": ["noise-node"],
  "overrides": [{ "files": "scripts/**", "extends": ["noise-node/script"] }],
  "root": true
}
```
