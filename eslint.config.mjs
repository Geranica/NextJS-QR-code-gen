import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = compat.config({
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:prettier/recommended',
    'next/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    '@next/eslint-plugin-next',
    '@stylistic/eslint-plugin',
    'react',
    'prettier',
    'jsx-a11y',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    jest: true,
  },
  rules: {
    camelcase: 'off',
    'react/jsx-fragments': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-exports': 'off',
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-danger': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'prettier/prettier': [
      'error',
      {
        jsxBracketSameLine: false,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        bracketSpacing: true,
        trailingComma: 'all',
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'always',
        endOfLine: 'lf',
        singleAttributePerLine: true,
        bracketSameLine: false,
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
  },
});

export default eslintConfig;
