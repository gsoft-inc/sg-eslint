module.exports = {
    plugins: ["shopify", "imports", "sharegate"],
    rules: {
        // https://github.com/Shopify/eslint-plugin-shopify/tree/master/docs/rules
        "shopify/restrict-full-import": ["warn", ["prop-types"]],

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/no-relative-parent-imports": "warn",

        "sharegate/prefer-cx": "warn"
    }
};
