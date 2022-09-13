module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'react-app', 'prettier', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-anonymous-default-export': 'off',
  },
}
