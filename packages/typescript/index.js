module.exports = {
    plugins: ["@typescript-eslint"],
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        // plugin:@typescript-eslint/recommended but warn instead of errors
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-types": "warn",
        "@typescript-eslint/no-array-constructor": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-extra-semi": "warn",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
        "@typescript-eslint/no-this-alias": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-as-const": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/triple-slash-reference": "warn",

        // additional rules we want
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/member-delimiter-style": ["warn"],
        "@typescript-eslint/consistent-type-definitions": ["warn"],
        "@typescript-eslint/no-implicit-any-catch": ["warn"],
        "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
        "@typescript-eslint/method-signature-style": "warn",

        // sharegate recommended eslint overrides
        "comma-dangle":"off",
        "@typescript-eslint/comma-dangle": ["warn", "never"],
        "indent":"off",
        "@typescript-eslint/indent": [
            "warn",
            4,
            {
                SwitchCase: 1,
                CallExpression: { arguments: "first" }
            }
        ],
        "no-dupe-class-members":"off",
        "@typescript-eslint/no-dupe-class-members":"warn",
        "no-loop-func":"off",
        "@typescript-eslint/no-loop-func":"warn",
        "no-shadow":"off",
        "@typescript-eslint/no-shadow":"warn",
        "no-unused-expressions":"off",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        "no-unused-vars":"off",
        "@typescript-eslint/no-unused-vars":"warn",
        "no-use-before-define":"off",
        "@typescript-eslint/no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],
        "no-useless-constructor":"off",
        "@typescript-eslint/no-useless-constructor":"warn",
        "object-curly-spacing":"off",
        "@typescript-eslint/object-curly-spacing": ["warn", "always"],
        "quotes":"off",
        "@typescript-eslint/quotes": ["warn", "double"],
        "semi":"off",
        "@typescript-eslint/semi": ["warn", "always"]
    }
};
