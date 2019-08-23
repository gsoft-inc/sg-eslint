# @sharegate/eslint-plugin-rules

Sharegate's custom ESLint plugin.

## Usage

Add the sharegate rules plugin to your .eslintrc configuration file.

```javascript
{
    plugins: ["@sharegate/rules"]
}
```

Then configure the rules you want to use under the rules section.

```javascript
{
    rules: {
        "@sharegate/rules/rule-name": "warn"
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
the rule's test file : packages\plugin\tests\lib\rules\[RULE_ID].test.js
the rule's documentation: packages\plugin\docs\rules\[RULE_ID].md
