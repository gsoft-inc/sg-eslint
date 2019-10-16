//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const rule = require("../../../lib/rules/semantic-ui-button-has-type"),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
const parserOptions = {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
        jsx: true
    }
};

ruleTester.run("semantic-ui-button-has-type", rule, {
    valid: [
        {
            code: `
            <button>ClickHere</button>
          `,
            parserOptions
        },
        {
            code: `
            <Button type="submit">ClickHere</Button>
          `,
            parserOptions
        },
        {
            code: `
            <Button type="reset">ClickHere</Button>
          `,
            parserOptions
        },
        {
            code: `
            <Button type="button">ClickHere</Button>
          `,
            parserOptions
        }
    ],

    invalid: [
        {
            code: `
            <Button >ClickHere</Button>
            `,
            errors: [
                {
                    message: "Missing an explicit type attribute for Button. <Button type={\"button\", \"submit\" or \"reset\"}"
                }
            ],
            parserOptions
        },
        {
            code: `
            <Button type="new">ClickHere</Button>
            `,
            errors: [
                {
                    message: "\"new\" is an invalid value for button type attribute"
                }
            ],
            parserOptions
        }
    ]
});
