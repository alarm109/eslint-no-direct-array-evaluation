const { findVariable } = require("@eslint-community/eslint-utils");

module.exports = {
  meta: {
    messages: {
      noDirectArrayEvaluation: 'Direct array evaluation is not allowed. Use array.length === 0 to check if array is empty.',
    }
  },
  create: function (context) {
    return {
      IfStatement(node) {
        if (
          node.test.type === "Identifier"
        ) {
          const variable = findVariable(context.getScope(), node.test)
          const type = variable.defs?.[0].node.init.type

          if (type === "ArrayExpression") {
            context.report({
              node: node,
              messageId: "noDirectArrayEvaluation"
            });
          }
        }
      },
    };
  },
};
