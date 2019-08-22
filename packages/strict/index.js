module.exports = {
    plugins: ["import", "sharegate"],
    rules: {
        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/no-relative-parent-imports": "warn",

        // https://github.com/gsoft-inc/sg-eslint/tree/master/packages/plugin/docs/rules
        "sharegate/prefer-cx": "warn",
        "sharegate/restrict-full-import": ["warn", ["prop-types"]]
    }
};
