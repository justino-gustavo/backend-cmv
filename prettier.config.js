export default {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',

  plugins: ['prettier-plugin-organize-imports'],
  importOrder: ['^@', '^[./]', '^.+\\.(js|jsx|ts|tsx)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
