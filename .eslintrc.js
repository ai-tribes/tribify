module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable all non-critical rules
    'import/order': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'sort-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-unescaped-entities': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off'
  }
}; 