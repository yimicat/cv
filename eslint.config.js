import js from '@eslint/js'
import ts from 'typescript-eslint'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import unocss from '@unocss/eslint-config/flat'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  unocss,
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,svelte}'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    ignores: ['node_modules/', 'build/', '.svelte-kit/', 'dist/']
  },
  {
    plugins: {},
    rules: {
      // 要求使用 let 或 const 而不是 var
      'no-var': 'error',

      // 不允许多个空行，最多一个
      'no-multiple-empty-lines': ['warn', { max: 1 }],

      // 禁止空余的多行
      'no-unexpected-multiline': 'error',

      // 数组和对象键值对最后一个逗号，
      // never参数：结尾不能带末尾的逗号,
      // always参数：结尾必须带末尾的逗号，
      // always-multiline：多行结尾必须带逗号，单行结尾不能带逗号
      // only-multiline：多行结尾可以带逗号，单行结尾不能带逗号
      'comma-dangle': ['warn', 'never'],

      //要求组件名称始终为 “-” 链接的单词
      'vue/multi-word-component-names': 'off',

      // 禁止定义未使用的变量
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-types': 'off',
      // 禁止使用 @ts-ignore
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      'react/jsx-props-no-spreading': 'off',
      'svelte/no-at-html-tags': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  }
]
