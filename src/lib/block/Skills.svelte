<script lang="ts">
  import { _, json } from 'svelte-i18n'
</script>

<section class="min-h-0 flex flex-col gap-y-3">
  <h2 class="text-xl font-bold">{$_('Skills.text')}</h2>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2 print:(grid-cols-2 gap-2) -mx-3">
    {#each $json('Skills.data') as i}
      <div
        class="flex flex-col overflow-hidden border border-muted rounded-lg bg-card p-3 text-card-foreground"
      >
        <div class="flex flex-col space-y-1.5">
          <div class="space-y-1">
            <h3 class="text-base font-semibold tracking-tight">{i.type}</h3>
          </div>
        </div>
        <div class="mt-auto flex text-pretty text-sm text-muted-foreground font-mono">
          <div class="mt-2 flex flex-wrap gap-1">
            <div class="flex flex-wrap gap-1">
              {#each i.list as l}
                <div
                  class="inline-flex items-center border border-transparent rounded-md bg-primary/80 px-2 py-0.5 text-nowrap text-xs text-primary-foreground font-semibold font-mono transition-colors hover:bg-primary/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
                >
                  {l}
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
