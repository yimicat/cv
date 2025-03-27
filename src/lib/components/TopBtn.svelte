<script lang="ts">
  /**
   * @description 返回顶部按钮
   */

  let nowY = 0
  const goTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<svelte:window bind:scrollY={nowY} />
<button
  on:click={goTop}
  class="{nowY > 100 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000
        inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm
        font-medium ring-offset-background transition-colors bg-background size-8
        focus-visible:(outline-none ring-2 ring-ring ring-offset-2)
        disabled:(pointer-events-none opacity-50) border border-input
        hover:(bg-accent text-accent-foreground)"
  aria-label="返回顶部"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
    {...$$props}
  >
    <path
      fill="currentColor"
      d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
    />
  </svg>
</button>
