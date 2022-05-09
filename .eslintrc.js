// Must be CommonJS Module becasue this is used outside of webpack
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-underscore-dangle': 'off',
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
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        'no-underscore-dangle': 'off',
      },
    },
  ],
};
