import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { ESLint } from 'eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default new ESLint({
  ignorePatterns: ['dist'],
  baseConfig: {
    extends: [
      js.configs.recommended,
      'plugin:@typescript-eslint/recommended'
    ],
    files: ['**/*.{ts,tsx}'],
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: globals.browser,
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: {}
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
    },
  },
})
