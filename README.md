# sg-eslint

Sharegate shareable ESLint configs.

## Installation

### Non React App

Install the recommended ESLint configuration packages with your favorite package manager.

With NPM:

```bash
npm i -D eslint @sharegate/eslint-config-recommended
```

You can also optionally install the following configuration packages:

- [@sharegate/eslint-config-sort-imports](https://github.com/gsoft-inc/sg-eslint/tree/master/packages/sort-imports)
- [@sharegate/eslint-config-lodash](https://github.com/gsoft-inc/sg-eslint/tree/master/packages/lodash)

To install everything with NPM:

```bash
npm i -D eslint @sharegate/eslint-config-recommended @sharegate/eslint-config-sort-imports @sharegate/eslint-config-lodash
```

Create a file called `.eslintrc.js` at the root of your project.

Add the following configurations:

```javascript
module.exports = {
    root: true,
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports", /* (Optional) */
        "@sharegate/eslint-config-lodash" /* (Optional) */
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        browser: true,
        es6: true
    }
};
```

### React App

Follow the instructions for the [Non React App configuration](https://github.com/gsoft-inc/sg-eslint/blob/master/README.md#non-react-app).

Install the React specific configuration packages with your favorite package manager.

With NPM:

```bash
npm i -D babel-eslint @sharegate/eslint-config-react
```

You can also optionally install the following configuration packages:

- [@sharegate/eslint-config-react-hooks](https://github.com/gsoft-inc/sg-eslint/tree/master/packages/react-hooks)

To install everything with NPM:

```bash
npm i -D babel-eslint @sharegate/eslint-config-react @sharegate/eslint-config-react-hooks
```

Update your existing `.eslintrc.js` configuration file:

```javascript
module.exports = {
    ...
    extends: [
        ...
        "@sharegate/eslint-config-react",
        "@sharegate/eslint-config-react-hooks", /* (Optional) */
    ],
    ...
};
```

### VSCode

[Install the ESLint extension for VSCode.](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

To enable ESLint autofix **on save**, add the following configuration to your VSCode project settings:

```javascript
{
    "editor.formatOnSave": true,
    "javascript.format.enable": false,
    "javascript.validate.enable": true,
    "json.format.enable": false,
    "eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true
}
```

## Maintainers

The following documentation is only for the maintainers of the package.

## Publish

Dont forget about publishing philosophie

## License

Copyright © 2019, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
