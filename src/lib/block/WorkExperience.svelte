<script lang="ts">
  import { _, json } from 'svelte-i18n'
</script>

<section class="min-h-0 flex flex-col gap-y-3">
  <h2 class="text-xl font-bold">{$_('WorkExperience.text')}</h2>
  {#each $json('WorkExperience.data') as i}
    <div class="mb-4 rounded-lg bg-card text-card-foreground">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            {i.corporation}
            <span class="inline-flex gap-x-1">
              <div
                class="inline-flex items-center border-transparent rounded-md bg-secondary px-2 py-0.5 text-nowrap align-middle text-xs text-secondary-foreground font-semibold font-mono transition-colors hover:bg-secondary/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring"
              >
                {i.job}
              </div>
            </span>
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">{i.date}</div>
        </div>
        <!--                <h4 class="font-mono text-sm leading-none">{i.job}</h4>-->
      </div>
      <div class="mt-2 text-pretty text-xs text-muted-foreground font-mono">
        <ol class="ml-5 mt-2 list-decimal">
          {#each i.duty as d}
            <li>{d}</li>
          {/each}
        </ol>
      </div>
    </div>
  {/each}
</section>
