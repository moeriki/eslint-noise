# ESLint Config Noise

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

An opinionated [ESLint](https://github.com/eslint/eslint) config. There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

## Noise base config

### Plugins

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### Install

```sh
npm install --save-dev eslint@^7.15 eslint-config-noise eslint-plugin-import@^2.22 eslint-plugin-promise@^4.2 eslint-plugin-unicorn@^27.0
```

### Configure

#### Recommended

`.eslintrc`

```json
{ "extends": ["noise"] }
```

## Extensions

### Node

#### Plugins

- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-config-noise-node eslint-plugin-node@^11.1
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise-node"] }
```

##### Scripts

`.eslintrc`

```json
{ "extends": ["noise", "noise-node/script"] }
```

### React

#### Plugins

- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-config-noise-react eslint-plugin-jsx-a11y@^6.4 eslint-plugin-react@^7.21 eslint-plugin-react-hooks@^4.2
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise-browser", "noise-react"] }
```

### TypeScript

#### Plugins

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-config-noise-ts @typescript-eslint/eslint-plugin@^4.10 @typescript-eslint/parser@^4.10 eslint-import-resolver-typescript@^2.3
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise-ts"] }
```

## Combining multiple extensions

You can combine multiple extensions by following the install step per extension and configure them together.

`.eslintrc`

```json
{ "extends": ["noise", "noise-react", "noise-ts"] }
```

You can use the ESLint config overrides option to have a more structured configuration.

You can combine multiple extensions by following the install step per extension and configure them together.

`.eslintrc`

```json
{
  "extends": ["noise"],
  "overrides": [
    {
      "files": ["server/**"],
      "extends": ["noise-node", "noise-ts"]
    },
    {
      "files": ["web-app/**"],
      "extends": ["noise-react", "noise-ts"]
    }
  ]
}
```
