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
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",

        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["warn", { "functions": false, "classes": true, "variables": false }],
        "indent": "off",
        "@typescript-eslint/indent": ["warn"],
        "@typescript-eslint/member-delimiter-style": ["warn"],
        "@typescript-eslint/consistent-type-definitions": ["warn"],
        "@typescript-eslint/no-implicit-any-catch": ["warn"],
        "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
        "@typescript-eslint/method-signature-style": "warn"
    }
};
