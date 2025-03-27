/**
 * comommitlint config
 * @author Yimi by yimicat.com
 */
/** @type { import('czg').UserConfig } */
export default {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  // @see: https://commitlint.js.org/#/reference-rules
  rules: {
    // @see: https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines
    // @see: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'docs', // 文档变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增）
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改 CI 配置、脚本
        'revert', // 回滚 commit
        'chore' // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
      ]
    ],
    'subject-case': [0] // subject大小写不做校验
  },

  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '请选择提交的类型：',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述（必填）:\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述：',
      confirmCommit: '确认要使用以上信息提交？（y/n）'
    },
    types: [
      { value: 'feat', name: 'feat:      ✨  新功能', emoji: ':sparkles:' },
      { value: 'fix', name: 'fix:       🐛 修复bug', emoji: ':bug:' },
      { value: 'docs', name: 'docs:      📝 文档变更', emoji: ':memo:' },
      {
        value: 'style',
        name: 'style:     💄 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)',
        emoji: ':lipstick:'
      },
      {
        value: 'refactor',
        name: 'refactor:  ♻️ 重构（既不是增加feat）,也不是修复bug',
        emoji: ':recycle:'
      },
      { value: 'perf', name: 'perf:      ⚡️ 性能优化', emoji: ':zap:' },
      {
        value: 'test',
        name: 'test:      ✅  测试用例,包括单元测试、集成测试等',
        emoji: ':white_check_mark:'
      },
      {
        value: 'build',
        name: 'build:     📦️影响构建系统或外部依赖的更改',
        emoji: ':package:'
      },
      {
        value: 'ci',
        name: 'ci:        🎡 对CI配置文件和脚本的更改',
        emoji: ':ferris_wheel:'
      },
      {
        value: 'chore',
        name: 'chore:     🔨 不属于以上类型的其他类型，比如构建流程, 依赖管理',
        emoji: ':hammer:'
      },
      { value: 'revert', name: 'revert:    ⏪️ 回退', emoji: ':rewind:' }
    ],
    useEmoji: true,
    emojiAlign: 'center',
    skipQuestions: ['scope', 'customScope'],
    subjectLimit: 100,
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: '以上都不是？我要自定义',
    emptyScopesAlias: '跳过',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    issuePrefixes: [{ value: 'closed', name: 'closed:   标记 ISSUES 已完成' }],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: '跳过',
    customIssuePrefixAlias: '自定义前缀',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
