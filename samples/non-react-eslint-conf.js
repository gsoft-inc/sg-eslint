module.exports = {
    root: true,
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-lodash"
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        browser: true,
        es6: true
    }
};
