<script>
  import { _, json } from 'svelte-i18n'
</script>

<section class="min-h-0 flex flex-col gap-y-3 print:hidden">
  <h2 class="text-xl font-bold">{$_('Timeline.text')}</h2>
  <div class="text-pretty text-sm text-muted-foreground font-mono">
    <ol class="relative border-l" reversed>
      {#each $json('Timeline.data').reverse() as i}
        <li class="mb-6 ml-4">
          <div
            class="absolute mt-1 h-3 w-3 border rounded-full bg-gray-200 -left-1.5 dark:(border-gray-900 bg-gray-700)"
          ></div>
          <time class="mb-1 text-sm text-gray-400 leading-none dark:text-gray-500">{i.date}</time>
          <h3 class="inline-block text-gray-900 font-bold dark:text-white">{i.name}</h3>
          <p class="ml-15 mt-1 text-xs text-gray-500 dark:text-gray-400">{i.desc}</p>
        </li>
      {/each}
    </ol>
  </div>
</section>
