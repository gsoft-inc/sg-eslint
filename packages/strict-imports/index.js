module.exports = {
    plugins: ["shopify", "imports"],
    rules: {
        // https://github.com/Shopify/eslint-plugin-shopify/tree/master/docs/rules
        "shopify/restrict-full-import": ["warn", ["prop-types"]],

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        "import/no-relative-parent-imports" : "warn"
    }
};
