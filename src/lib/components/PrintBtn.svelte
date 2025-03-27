<script lang="ts">
  /**
   * @description 打印按钮
   */

  const print = () => {
    window.print()
  }
</script>

<button
  on:click={print}
  class="size-8 inline-flex items-center justify-center whitespace-nowrap border border-input rounded-md text-sm font-medium ring-offset-background transition-opacity duration-1000 disabled:(pointer-events-none opacity-50) hover:(bg-accent text-accent-foreground) focus-visible:(outline-none ring-2 ring-offset-2 ring-ring)"
  aria-label="打印"
>
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
  >
    <path
      d="M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8z"
    ></path><path
      fill="currentColor"
      d="M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180z m304 664H360V568h304v276z m200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z"
    ></path>
  </svg>
</button>
