<script lang="ts">
  /**
   * @description 切换主题按钮
   */
  let audio: HTMLAudioElement

  const lightClick = async () => {
    await audio.play()
  }

  const toggleTheme = (event: MouseEvent) => {
    lightClick()
    const rootDom = document.documentElement
    const isDark = rootDom.classList.contains('dark')

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    // 兼容性处理
    if (!document.startViewTransition) {
      rootDom.classList.toggle('dark')
      console.log('Your browser does not support startViewTransition.')
      return
    }

    const transition = document.startViewTransition(async () => {
      rootDom.classList.toggle('dark')
    })

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      rootDom.animate(
        {
          clipPath: isDark ? [...clipPath].reverse() : clipPath
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
        }
      )
    })
  }
</script>

<button
  aria-label="切换主题"
  on:click={toggleTheme}
  class="size-8 inline-flex items-center justify-center whitespace-nowrap border border-input rounded-md bg-background text-sm font-medium ring-offset-background transition-colors disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
>
  <i class="i-carbon-sun color-rose dark:(i-carbon-moon color-amber)"></i>
</button>
<audio bind:this={audio} preload="auto" class="disabled">
  <source class="track" src="/light.mp3" type="audio/mpeg" />
</audio>
