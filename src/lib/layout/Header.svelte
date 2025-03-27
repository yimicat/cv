<script lang="ts">
  import DarkBtn from '$lib/components/DarkBtn.svelte'
  import I18nBtn from '$lib/components/I18nBtn.svelte'
  import TopBtn from '$lib/components/TopBtn.svelte'
  import PrintBtn from '$lib/components/PrintBtn.svelte'
  import Corner from '$lib/block/Corner.svelte'
</script>

<header class="relative">
  <nav>
    <Corner />
    <div
      class="fixed bottom-16 right-1 z-4 flex flex-col gap-y-1 text-sm text-muted-foreground lg:right-30 xl:right-60 print:hidden"
    >
      <TopBtn />
      <DarkBtn />
      <I18nBtn />
      <PrintBtn />
    </div>
  </nav>
</header>
