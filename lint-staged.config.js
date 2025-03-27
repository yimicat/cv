export default {
  '*.svelte': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{json}': ['prettier --write']
}
