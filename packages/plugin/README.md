# eslint-plugin-sharegate

Sharegate&#39;s custom ESLint plugin.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sharegate`:

```
$ npm install eslint-plugin-sharegate --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sharegate` globally.

## Usage

Add `sharegate` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "sharegate"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "sharegate/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

## Maintainers

The following documentation is only for the maintainers of this repository.

## Tooling

You must install Yeoman and generator-eslint

npm install -g yo
npm install -g generator-eslint

## Rule Creation

1. Navigate to the sg-eslint\packages\plugin folder
2. In Powershell, enter the following command : yo eslint:rule

```
? What is your name? ...
? Where will this rule be published? ESLint Plugin
? What is the rule ID? prefer-cx             (Make sure you follow the following naming convention: https://eslint.org/docs/developer-guide/working-with-rules#rule-naming-conventions)
? Type a short description of this rule: ...
? Type a short example of the code that will fail: import classnames from "classnames";
```

