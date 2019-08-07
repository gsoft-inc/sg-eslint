module.exports = {
    root: true,
    extends: [
        "@sharegate/eslint-config-recommended",
        "@sharegate/eslint-config-sort-imports",
        "@sharegate/eslint-config-lodash",
        "@sharegate/eslint-config-react",
        "@sharegate/eslint-config-react-hooks",
    ],
    parserOptions: {
        ecmaVersion: 2018
    },
    env: {
        browser: true,
        es6: true
    }
};
