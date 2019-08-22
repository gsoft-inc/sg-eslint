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
    "plugins": ["sharegate"]
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

-   Fill in provided rules here

## Maintainers

The following documentation is only for the maintainers of this repository.

## Rule Creation

1. 3 files must be created,

the rule's definition : packages\plugin\lib\rules\[RULE_ID].js
the rule's test file : testpackages\plugin\tests\lib\rules\[RULE_ID].test.js
the rule's documentation: packages\plugin\docs\rules\[RULE_ID].md
