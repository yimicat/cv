/**
 * prettier config
 * @author Yimi by yimicat.com
 * @date 2023-02-25 20:21
 */
export default {
  printWidth: 100, // 每行文字数量达 100 字元就换到新的一行
  semi: false, // 每个语句的结尾不需要分号
  singleQuote: true, // 字串使用单引号，而不是双引号
  trailingComma: 'none', // 如 Object、Array 内的元素不需要尾随逗号
  useTabs: false, //是否使用制表符，不使用制表符，使用空格
  tabWidth: 2, //缩进的宽度，2 个空格
  bracketSpacing: true, //大括号 {} 中开始和结束是否要空格，true — { foo: 1 }，false — {foo: 1}
  endOfLine: 'auto', //每行的结束符（回车符、换行符），取值请参考 https://www.prettier.cn/docs/options.html#end-of-line
  arrowParens: 'avoid', //只有一个参数的箭头函数是否带括号，always — 始终带括号，avoid — 不带括号
  htmlWhitespaceSensitivity: 'css', //根据显示样式决定 html 要不要折行
  proseWrap: 'never', //什么对代码进行折行，always — 如果超过 printWidth 指定的一行最多字符宽度，则进行折行；never — 将每块代码块展开成一行；preserve — 什么都不做，保持原样。
  plugins: ['prettier-plugin-svelte'], //@see https://github.com/sveltejs/prettier-plugin-svelte
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
}
