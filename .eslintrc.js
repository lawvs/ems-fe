// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'indent': ["error", 2],
    'linebreak-style': ['error', 'unix'],
    'no-var': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    "no-trailing-spaces": 'error',
    'no-irregular-whitespace': 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': 'warn',
  },
}
