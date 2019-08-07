# sg-eslint

Sharegate shareable ESLint configs.

# Consumers

## Installation

### Non React App

Install the minimum required packages with your favorite package manager.

With NPM:

```bash
npm i -D eslint @sharegate/eslint-config-recommended
```

You can also optionally install the following packages:

- [@sharegate/eslint-config-sort-imports](http://www.google.com)
- [@sharegate/eslint-config-lodash](http://www.google.com)

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

Follow the instructions for the [Non React App configuration](Non React App). 

////////////

Dont forget to speicify to install eslint and babel-eslint for react etc..

VSCode setup for autofix

Create a sample of what the project eslint config file should like for a react project and for a non react project

# Maintainers

## Publish

Dont forget about publishing philosophie

## License

Copyright © 2019, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/gsoft-inc/gsoft-license/blob/master/LICENSE.
