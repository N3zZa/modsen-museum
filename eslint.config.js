import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      requireConfigFile: true,
      babelOptions: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
    globals: globals.browser,
  },
  plugins: {
    react: reactPlugin,
    reactHooks: reactHooksPlugin,
    prettier: prettierPlugin,
    '@typescript-eslint': typescriptPlugin,
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
