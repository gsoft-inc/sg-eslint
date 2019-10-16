const { splitPath } = require("../utils/path");
const { getNodeSource } = require("../utils/node");
const { getFileName } = require("../utils/context");
const { parse, sep } = require("path");

module.exports = {
    meta: {
        docs: {
            description: "CSS Modules should have the same name as a component and located in the same folder",
            category: "Strict",
            recommended: false
        },
        fixable: null
    },

    create: function(context) {
        const parsedPath = parse(getFileName(context));

        const isCssModule = source => {
            return source.endsWith(".module.css");
        };

        const isStylesheetInSameFolder = source => {
            return splitPath(source).length <= 2; // ./myImage.svg
        };

        return {
            ImportDeclaration: function(node) {
                const importSource = getNodeSource(node);

                if (isCssModule(importSource)) {
                    const validCssFilename = `${parsedPath.name}.module.css`;

                    if (!isStylesheetInSameFolder(importSource)) {
                        // ./myImage.svg
                        context.report(
                            node,
                            `CSS Modules should be associated to one component and located in the same folder ./${validCssFilename}. If the module is already used by another component, create a new one.`
                        );
                    } else {
                        const validCssPath = `.${sep}${validCssFilename}`;
                        const isNamingValid = importSource === validCssPath;
                        if (!isNamingValid) {
                            context.report(
                                node,
                                `CSS Modules should be associated to one component and should be named ./${validCssFilename}. If the module is already used by another component, create a new one.`
                            );
                        }
                    }
                }
            }
        };
    }
};
