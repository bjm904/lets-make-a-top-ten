// Must be CommonJS Module becasue this is used outside of webpack
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:consistent-default-export-name/fixed',
    'plugin:mobx/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'mobx',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'sort-imports': ['error', { allowSeparatedGroups: true, ignoreCase: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:consistent-default-export-name/fixed',
        'plugin:mobx/recommended',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-underscore-dangle': 'off',
        'sort-imports': ['error', { allowSeparatedGroups: true, ignoreCase: true }],
        '@typescript-eslint/explicit-function-return-type': 'error',
        'mobx/no-anonymous-observer': 'off',
        'mobx/missing-observer': 'off',
        'react/jsx-key': 'error',
      },
    },
  ],
};
