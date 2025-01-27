import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

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
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
