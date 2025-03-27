/**
 * stylelint config
 * @author Yimi by yimicat.com
 * @see https://stylelint.io/user-guide/rules
 */
export default {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/svelte',
    'stylelint-config-recess-order' //配置stylelint css属性书写顺序插件
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|svelte|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(html|svelte)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
  rules: {
    'prettier/prettier': true,
    'font-family-no-missing-generic-family-keyword': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'config',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'unocss',
          'variants'
        ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['view-transition-old']
      }
    ]
  }
}
