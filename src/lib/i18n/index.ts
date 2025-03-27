import { browser } from '$app/environment'
import { init, register, waitLocale } from 'svelte-i18n'

const defaultLocale = 'zh'

register('en', () => import('$lib/i18n/locales/en.json'))
register('zh', () => import('$lib/i18n/locales/zh.json'))

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? window.navigator.language : defaultLocale
})
export async function preload() {
  // awaits for 'en' loaders
  return waitLocale()
}
