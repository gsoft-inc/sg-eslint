module.exports = {
    parser: "@babel/eslint-parser",
    plugins: ["next"],
    extends:["@sharegate/eslint-config-react"],
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
