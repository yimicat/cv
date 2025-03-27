<script>
  /**
   * @description i18n按钮
   */
  import { getLocaleFromNavigator, locale } from 'svelte-i18n'
  const localeNavigator = getLocaleFromNavigator()
  let localeText = 'zh'
  if (!localeNavigator) {
    locale.set(localeText)
  }

  const localeClick = () => {
    if (localeText === 'zh') {
      localeText = 'en'
    } else {
      localeText = 'zh'
    }
    locale.set(localeText)
  }
</script>

<button
  aria-label="切换语言"
  on:click={localeClick}
  class="size-8 items-center whitespace-nowrap border border-input rounded-md bg-background text-sm font-medium font-mono ring-offset-background transition-colors disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
>
  {localeText}
</button>
