<script lang="ts">
  $: isBottom = false

  let year = new Date().getFullYear()

  let os = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

    if (scrollTop === 0) {
      console.log('top')
    }
    isBottom = scrollTop + clientHeight >= scrollHeight - 100
  }
</script>

<svelte:window on:scroll={os} />
<footer class="{isBottom ? 'opacity-100' : 'opacity-0'} transition-opacity print:hidden">
  <p
    class="fixed bottom-0 left-0 right-0 block border-t border-t-muted p-1 text-center text-xs text-muted-foreground"
  >
    <a href="https://yimicat.com">Copyright © 2021 ~ {year} by Yimi. All rights reserved.</a>
  </p>
</footer>
