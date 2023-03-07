const { RuleTester } = require('eslint');
const noDirectArrayEvaluationRule = require('../rules/no-direct-array-evaluation');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: "latest"
  },
});

ruleTester.run('no-empty-catch', noDirectArrayEvaluationRule, {
  valid: [
    {
      code: `
      const array = [];
      if (array.length === 0) {}
    `,
    },
    {
      code: `
      const string = "eslint";
      if (string) {}
    `,
    },
    {
      code: `
      const number = 0;
      if (number) {}
    `,
    },
    {
      code: `
      const object = {
        foo: "bar"
      };
      if (object) {}
    `,
    }
  ],
  invalid: [
    {
      code: `
      const foo = [];
      if (foo) {}
    `,
      errors: [{messageId: 'noDirectArrayEvaluation'}],
    }
  ]
});
