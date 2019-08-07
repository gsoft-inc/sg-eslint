# sg-eslint

Sharegate shareable ESLint configs.

## Installation

### Non React App

First, install the recommended ESLint configuration packages with your favorite package manager.

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

Then, create a file called `.eslintrc.js` at the root of your project and add the following configurations:

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

First, follow the instructions for the [Non React App configuration](https://github.com/gsoft-inc/sg-eslint/blob/master/README.md#non-react-app).

Then, install the React specific configuration packages with your favorite package manager.

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

Finally, update your existing `.eslintrc.js` configuration file:

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

Install the [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). The extension will provide Just In Time linting while typing in VSCode.

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

The following documentation is only for the maintainers of the packages.

### Installation

First, clone the repository:

```bash
git clone https://github.com/gsoft-inc/sg-eslint.git
```

Then, install the dependencies for all the packages with Yarn:

```bash
yarn install
```

Why you must use Yarn?

Because this project is a monorepo and we leverage [yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces) to manage our packages inter-dependencies.

### Release

This project use [Lerna](https://github.com/lerna/lerna) to facilitate the release of the packages.

The packages can be released [independently](https://github.com/lerna/lerna#independent-mode). The decision to release or not a package is automatically based on wether the code of the package has changed or not.

**Process**

Updates of those configuration packages should batch multiple changes. Most of ESLint rules are stylistics and doesn't have an impact on the success of a project. On the other hand, frequent changes of those rules might cause friction and be a burden for the teams.

Adding a new rule or updating an existing one can generate a lot of modifications to the code of an existing project. To ensure that the authors of the projects who consume those configuration packages understand the impact of updating a package, every release of a package **should be a major increment to the version number**.

Every release should also contain a **release notes** that includes the new or updated rules and how to disabled / revert them manually in the consumer project when possible.

**Do the actual release**

Before you release, make sure you have **write access** for all the NPM packages that will be published and that you are [logged in to NPM](https://docs.npmjs.com/logging-in-to-an-npm-enterprise-registry-from-the-command-line).

To release, open a terminal at the root project of the workspace and execute the following:

```bash
yarn new-version
yarn release
git push
```

## License

Copyright © 2019, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
