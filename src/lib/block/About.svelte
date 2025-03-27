<script lang="ts">
  import { _, json } from 'svelte-i18n'
</script>

<section class="min-h-0 flex flex-col gap-y-3">
  <h2 class="text-xl font-bold">{$_('About.text')}</h2>
  <div class="text-pretty text-sm text-muted-foreground font-mono">
    <ol class="ml-6 list-decimal">
      {#each $json('About.data.info') as i, index}
        <li>{@html i}</li>
      {/each}
    </ol>
  </div>
</section>
