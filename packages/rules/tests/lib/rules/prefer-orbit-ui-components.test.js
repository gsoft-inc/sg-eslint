//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const rule = require("../../../lib/rules/prefer-orbit-ui-components"),
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

ruleTester.run("prefer-orbit-ui-components", rule, {
    valid: [
        {
            code: `
            import { Dropdown } from "semantic-ui-react";
          `,
            parserOptions
        },
        {
            code: `
            import { Label } from "@orbit-ui/react-components";
          `,
            parserOptions
        },
        {
            code: `
            import { Button } from "@orbit-ui/react-components";
          `,
            parserOptions
        },
    ],

    invalid: [
        {
            code: `
            import { Button } from "semantic-ui-react";
            `,
            errors: [
                {
                    message: "You should use the component \"Button\" from @orbit-ui instead of the one from semantic-ui-react. The Orbit UI documentation can be found here: https://sg-orbit.netlify.com"
                }
            ],
            parserOptions
        },
        {
            code: `
            import { Label } from "semantic-ui-react";
            `,
            errors: [
                {
                    message: "You should use the component \"Label\" from @orbit-ui instead of the one from semantic-ui-react. The Orbit UI documentation can be found here: https://sg-orbit.netlify.com"
                }
            ],
            parserOptions
        }
    ]
});
