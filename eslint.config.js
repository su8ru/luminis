import js from '@eslint/js';
import tsEslintParser from '@typescript-eslint/parser';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import pluginAstro from 'eslint-plugin-astro';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ['**/{dist}/**'],
  },
  js.configs.recommended,
  ...pluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint/eslint-plugin': tsEslintPlugin,
    },
  },
  configPrettier,
];
