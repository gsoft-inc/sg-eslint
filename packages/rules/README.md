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

## Maintainers

The following documentation is only for the maintainers of this repository.

## Rule Creation

In order to create a new rule, you must manually create 3 new files :

- the rule's definition : packages\plugin\lib\rules\[RULE_ID].js
- the rule's test file : packages\plugin\tests\lib\rules\[RULE_ID].test.js
- the rule's documentation: packages\plugin\docs\rules\[RULE_ID].md

And add the rule's documentation in the workspace's [README](../../README.md) in the Plugin-Provided Rules section.