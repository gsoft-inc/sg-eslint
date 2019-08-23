
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/prefer-cx"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
const parserOptions = { ecmaVersion: 6, sourceType: "module" };
const errors = [
    {
        type: "ImportDeclaration",
        message:
            'You should use "cx" as the reference name when importing classnames.'
    }
];

ruleTester.run("prefer-cx", rule, {
    valid: [
        { code: 'import cx from "classnames";', parserOptions },
        { code: 'import foo from "bar"', parserOptions }
    ],

    invalid: [
        { code: 'import classnames from "classnames";', errors, parserOptions },
        { code: 'import foo from "classnames";', errors, parserOptions }
    ]
});
