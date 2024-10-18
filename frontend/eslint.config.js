module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'next/typescript',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
