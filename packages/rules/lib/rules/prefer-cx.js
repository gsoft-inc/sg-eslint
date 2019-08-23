"use strict";

module.exports = {
    meta: {
        docs: {
            description:
                "Prefer cx over classnames as the name of classnames imports.",
            category: "Strict Imports",
            recommended: false
        },
        fixable: null,
        schema: []
    },

    create: function(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value !== "classnames") {
                    return;
                }
                node.specifiers.forEach(specifier => {
                    if (specifier.type !== "ImportDefaultSpecifier") {
                        return;
                    }
                    if (specifier.local.name !== "cx") {
                        context.report(
                            node,
                            'You should use "cx" as the reference name when importing classnames.'
                        );
                    }
                });
            }
        };
    }
};
