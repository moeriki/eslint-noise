# ESLint config noise

An opinionated [ESLint](https://github.com/eslint/eslint) config. There are many ways to [configure ESLint in the official documentation](https://eslint.org/docs/user-guide/configuring).

## Noise base config

### Plugins

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

### Install

```sh
npm install --save-dev eslint@^8.1 eslint-config-noise eslint-plugin-import@^2.25 eslint-plugin-promise@^5.1 eslint-plugin-unicorn@^37.0
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
npm install --save-dev eslint-plugin-node@^11.1
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise/node"] }
```

##### Scripts

`.eslintrc`

```json
{ "extends": ["noise", "noise/node/script"] }
```

### React

#### Plugins

- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-plugin-jsx-a11y@^6.4 eslint-plugin-react@^7.23 eslint-plugin-react-hooks@^4.2
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise/browser", "noise/react"] }
```

### TypeScript

#### Plugins

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev @typescript-eslint/eslint-plugin@^5.2 @typescript-eslint/parser@^5.2 eslint-import-resolver-typescript@^2.5
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise/typescript"] }
```

### Vue

#### Plugins

- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-config-prettier@^6 eslint-plugin-vue@^4.5
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise/vue", "noise/vue/ts"] }
```

### Web-App

Many web apps are a combination of Node.js and browser directives. This presets
combines much of the `browser` and `node` configs with some tweaks.

#### Plugins

- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)

#### Install

Make sure you have install the Noise base config.

```sh
npm install --save-dev eslint-plugin-node@^11.1
```

#### Configure

##### Recommended

`.eslintrc`

```json
{ "extends": ["noise", "noise/web-app"] }
```

## Combining multiple extensions

You can combine multiple extensions by following the install step per extension and configure them together.

`.eslintrc`

```json
{ "extends": ["noise", "noise/react", "noise/typescript"] }
```

You can use the ESLint config overrides option to have a more structured configuration.

You can combine multiple extensions by following the install step per extension and configure them together.

`.eslintrc`

```json
{
  "extends": ["noise"],
  "overrides": [
    {
      "files": ["**/*.ts"],
      "extends": ["noise/typescript"]
    },
    {
      "files": ["**/*.{jsx,tsx}"],
      "extends": ["noise/react"]
    },
    {
      "files": ["**/*.vue"],
      "extends": ["noise/vue", "noise/vue/ts"]
    },
    {
      "files": ["server/src/**"],
      "extends": ["noise/node", "noise/typescript"]
    },
    {
      "files": ["scripts/**"],
      "extends": ["noise/node", "noise/node/scripts"]
    },
    {
      "files": ["web-app/src/**"],
      "extends": ["noise/web-app"]
    }
  ]
}
```
