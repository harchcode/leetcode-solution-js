module.exports = {
  extends:  [
      'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
  },
  rules:  {
      // Error
      'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
      'comma-dangle': ['error', 'never'],
      'max-lines': ['error', 500],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'quotes': ['error', 'single', { allowTemplateLiterals: true }]
  }
};
