module.exports = {
    plugins: ["react-hooks", "shopify"],
    rules: {
        // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "warn",

        // https://github.com/Shopify/eslint-plugin-shopify/tree/master/docs/rules
        "shopify/react-hooks-strict-return": "warn",
    }
};
