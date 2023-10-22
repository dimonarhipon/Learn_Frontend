module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'no-console': 'error',
    quotes: ['warn', 'single'],
    // 'jsx-quotes': ['error', 'prefer-double'],
    // '@typescript-eslint/no-unused-vars': ['warn'],
    // '@typescript-eslint/no-use-before-define': ['error'],
    // '@typescript-eslint/semi': ['error'],
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
