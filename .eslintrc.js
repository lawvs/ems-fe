// https://eslint.org/docs/user-guide/configuring
// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code will be 1)

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    // 'semi': ['error', 'never'],
    // 'quotes': ['error', 'single'],
    // 'indent': ["error", 2],
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': ['warn', {'args': 'none'}],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    "no-trailing-spaces": 'error',
    'no-irregular-whitespace': 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
  },
}
