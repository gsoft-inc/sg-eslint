// based on https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md

const optionDefaults = {
    button: true,
    submit: true,
    reset: true
};

function propName(prop = {}) {
    if (!prop.type || prop.type !== "JSXAttribute") {
        throw new Error("The prop must be a JSXAttribute collected by the AST parser.");
    }

    if (prop.name.type === "JSXNamespacedName") {
        return `${prop.name.namespace.name}:${prop.name.name.name}`;
    }

    return prop.name.name;
}

function getProp(props = [], prop = "", ignoreCase = true) {
    const propToFind = ignoreCase ? prop.toUpperCase() : prop;

    return props.find(attribute => {
        // If the props contain a spread prop, then skip.
        if (attribute.type === "JSXSpreadAttribute") {
            return false;
        }

        const currentProp = ignoreCase ? propName(attribute).toUpperCase() : propName(attribute);

        return propToFind === currentProp;
    });
}

const extractValueFromLiteral = value => {
    const { value: extractedValue } = value;

    const normalizedStringValue = typeof extractedValue === "string" && extractedValue.toLowerCase();
    if (normalizedStringValue === "true") {
        return true;
    }

    if (normalizedStringValue === "false") {
        return false;
    }

    return extractedValue;
};

module.exports = {
    meta: {
        docs: {
            description: "Forbid Semantic UI's \"Button\" element without an explicit \"type\" attribute.",
            category: "Possible Errors",
            recommended: false
        },
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    button: {
                        default: optionDefaults.button,
                        type: "boolean"
                    },
                    submit: {
                        default: optionDefaults.submit,
                        type: "boolean"
                    },
                    reset: {
                        default: optionDefaults.reset,
                        type: "boolean"
                    }
                },
                additionalProperties: false
            }
        ]
    },

    create: function(context) {
        const configuration = Object.assign({}, optionDefaults, context.options[0]);

        const reportMissing = node => {
            context.report({
                node,
                message: "Missing an explicit type attribute for Button. <Button type={\"button\", \"submit\" or \"reset\"}"
            });
        };

        const checkValue = (node, value, quoteFn) => {
            const q = quoteFn || (x => `"${x}"`);
            if (!(value in configuration)) {
                context.report({
                    node,
                    message: `${q(value)} is an invalid value for button type attribute`
                });
            } else if (!configuration[value]) {
                context.report({
                    node,
                    message: `${q(value)} is a forbidden value for button type attribute`
                });
            }
        };

        return {
            JSXElement(node) {
                if (node.openingElement.name.name !== "Button") {
                    return;
                }

                const typeProp = getProp(node.openingElement.attributes, "type");

                if (!typeProp) {
                    reportMissing(node);

                    return;
                }

                const propValue = extractValueFromLiteral(typeProp);
                if (!propValue && typeProp.value && typeProp.value.expression) {
                    checkValue(node, typeProp.value.expression.name, x => `\`${x}\``);
                } else {
                    if (propValue.value) {
                        checkValue(node, propValue.value);
                    } else {
                        checkValue(node, propValue);
                    }
                }
            }
        };
    }
};
