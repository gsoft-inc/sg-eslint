# sg-eslint

ShareGate shared [ESLint](https://eslint.org) config.

## Installation

### Non React App

Install the ShareGate recommended ESLint configuration packages.

For a native JavaScript project:

```bash
npm i -D eslint @sharegate/eslint-config-recommended
```

With TypeScript:

```bash
npm i -D eslint @sharegate/eslint-config-typescript @sharegate/eslint-config-recommended
```

You can also optionally install the following configuration packages:

- [@sharegate/eslint-config-sort-imports](/packages/sort-imports)
- [@sharegate/eslint-config-lodash](/packages/lodash)
- [@sharegate/eslint-config-strict](/packages/strict)

Then, create a file called `.eslintrc.js` at the root of your project and add the following configurations:

```javascript
module.exports = {
    root: true,
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-typescript", /* (If your project is IN TypeScript) */
        ...
    ]
};
```

### React App not using any framework

Follow the instructions for the [Non React App configuration](https://github.com/gsoft-inc/sg-eslint/blob/master/README.md#non-react-app).

Then, install the React specific configuration packages:

```bash
npm i -D @sharegate/eslint-config-react
```

If your project is *NOT* using TypeScript:

```bash
npm i -D babel-eslint
```

Finally, update your existing `.eslintrc.js` configuration file:

```javascript
module.exports = {
    ...
    parser: "@babel/eslint-parser" /* (If your project is NOT in TypeScript) */
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-typescript", /* (If your project is IN TypeScript) */
        "@sharegate/eslint-config-react"
        ...
    ],
    ...
};
```

### Nextjs App

Follow the instructions for the [Non React App configuration](https://github.com/gsoft-inc/sg-eslint/blob/master/README.md#non-react-app).

Then, install the Nextjs specific configuration packages:

```bash
npm i -D @babel/eslint-parser @sharegate/eslint-config-nextjs
```

If your project is *NOT* using TypeScript:

```bash
npm i -D babel-eslint
```

Finally, update your existing `.eslintrc.js` configuration file:

```javascript
module.exports = {
    ...
    parser: "@babel/eslint-parser" /* (If your project is NOT in TypeScript) */
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-typescript", /* (If your project is IN TypeScript) */
        "@sharegate/eslint-config-nextjs"
        ...
    ],
    ...
};
```

### VSCode

Install the [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). The extension will provide Just In Time linting while typing in VSCode.

To enable ESLint autofix **on save**, add the following configuration to your VSCode project settings:

```javascript
{
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.organizeImports": false
    },
    "editor.formatOnSave": true,
    "[html]": {
        "editor.formatOnSave": false
    },
    "javascript.format.enable": false,
    "javascript.validate.enable": true,
    "json.format.enable": false,
    "eslint.alwaysShowStatus": true,
    "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

This is also strongly recommended that you had a `.prettierignore` file at the root of your project with `*` as content to prevent any conflict between ESLint and Prettier for user who have the Prettier VSCode extension installed:

```javascript
// .prettierignore
*.js
*.jsx

// or if you want to ignore all files
*
```

### Provided configurations

The following core configurations are provided:

- [recommended](/packages/recommended/index.js): Use this for anything written with the latest ECMAScript specifications.
- [typescript](/packages/typescript/index.js): Use this for anything written in TypeScript.
- [react](/packages/react/index.js): Use this for React projects.
- [nextjs](/packages/nextjs/index.js): Use this for Nextjs projects.

> The **typescript** config extends the **recommended** config, you shouldn't have to include both.

We also provides the following optionnal configurations, which can be used on top of the core configurations:

- [sort-imports](/packages/sort-imports): Use this to sort your imports with ESLint.
- [lodash](/packages/lodash/index.js): Use this for projects that use lodash.
- [strict](/packages/strict/index.js): Use this for projects that wants to prohibits some syntax.

### Plugin-Provided Rules

Sharegate's plugin provides the following custom rules, which are included as appropriate in all core linting configs:

- [prefer-cx](packages/rules/docs/rules/prefer-cx.md): Prefer cx over classnames as the name of classnames imports.
- [restrict-full-import](packages/rules/docs/rules/restrict-full-import.md): Prevent importing the entirety of a package.
- [semantic-ui-button-has-type](packages/rules/docs/rules/semantic-ui-button-has-type.md): Prevent usage of Semantic UI's `Button` elements without an explicit `type` attribute.
- [strict-css-modules-names](packages/rules/docs/rules/strict-css-modules-names.md): CSS modules should have the same file name (minus the file extension) as the scoped component and be located in the same folder.
- [prefer-orbit-ui-components](packages/rules/docs/rules/prefer-orbit-ui-components.md):  Prefer Orbit UI React components over Semantic UI React components.

## Maintainers

The following documentation is only for the maintainers of this repository.

### Installation

Clone the repository:

```bash
git clone https://github.com/gsoft-inc/sg-eslint.git
```

Then, install the dependencies for all the packages with Yarn:

```bash
yarn install
```

Why you must use Yarn?

Because this project is a monorepo and we leverage [yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces) to manage our packages dependencies and inter-dependencies.

### Release

This project use [Lerna](https://github.com/lerna/lerna) to facilitate the release of the packages.

The packages can be released [independently](https://github.com/lerna/lerna#independent-mode). The decision to release or not a package is automatically based on wether the code of the package has changed or not.

**Process**

Updates to these configuration packages should batch multiple changes. Most of ESLint rules are stylistics and doesn't have an impact on the success of a project. On the other hand, frequent changes of those rules might cause friction and be a burden for the teams.

Adding a new rule or updating an existing one can generate a lot of modifications to the code of an existing project. To ensure that the consumers understand the impact of updating these packages, every release **should be a major increment to the version number**.

Every release should also contain a **release notes** that includes the new or updated rules and how to disabled / revert them manually in the consumer project when possible.

**Do the actual release**

Before you release, make sure you have **write access** for all the NPM packages that will be published and that you are [logged in to NPM](https://docs.npmjs.com/cli/v9/commands/npm-login).

To release, open a terminal at the root of the project and execute the following commands:

```bash
yarn new-version
yarn release
yarn push-release <yyyy-MM-dd>
```

After you released the packages, create a [Github release](https://github.com/gsoft-inc/sg-eslint/releases) for the Git annotated tag [yyyy-MM-dd] created earlier by the `push-release` command and list all the changes that has been published.

Dont forget to **publish** the release.

## License

Copyright © 2019, GSoft inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
