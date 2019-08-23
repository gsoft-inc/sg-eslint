module.exports = {
    plugins: ["import", "@sharegate/rules"],
    rules: {
        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/no-relative-parent-imports": "warn",

        // https://github.com/gsoft-inc/sg-eslint/tree/master/packages/rules/docs/rules
        "@sharegate/rules/prefer-cx": "warn",
        "@sharegate/rules/restrict-full-import": ["warn", ["prop-types"]]
    }
};
