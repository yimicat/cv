<script lang="ts">
  import { _, json } from 'svelte-i18n'
</script>

<section class="print-force-new-page min-h-0 flex flex-col scroll-mb-16 gap-y-3">
  <h2 class="group text-xl font-bold">
    <a href="https://works.yimicat.com" class="hover:underline" target="_blank"
      >{$_('Projects.text')}<span
        class="i-tdesign:chevron-right inline-block align-sub print:hidden"
      ></span>
    </a>
  </h2>
  <div
    class="grid grid-cols-1 gap-3 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 print:grid-cols-2 xl:grid-cols-2 -mx-3 print:gap-2"
  >
    {#each $json('Projects.data') as i}
      <div
        class="flex flex-col overflow-hidden border border-muted rounded-lg bg-card p-3 text-card-foreground"
      >
        <div class="flex flex-col space-y-1.5">
          <div class="space-y-1">
            <h3 class="text-base font-semibold tracking-tight">
              {i.name}
            </h3>
            <h4 class="text-sm leading-none font-mono">{i.date}</h4>
            <p class="text-xs text-muted-foreground font-mono">{i.desc}</p>
          </div>
        </div>
        <div class="mt-auto flex text-pretty text-sm text-muted-foreground font-mono">
          <div class="mt-2 flex flex-wrap gap-1">
            {#each i.skills as s}
              <div
                class="inline-flex items-center border border-transparent rounded-md bg-secondary px-1 py-0 text-nowrap text-[10px] text-secondary-foreground font-semibold font-mono transition-colors hover:bg-secondary/60 focus:(outline-none ring-2 ring-offset-2 ring-ring)"
              >
                {s}
              </div>
            {/each}
          </div>
        </div>
        <div class="mt-2 text-pretty text-xs text-muted-foreground font-mono">
          <ol class="m-2 ml-5 list-decimal">
            {#each i.duty as d}
              <li>{d}</li>
            {/each}
          </ol>
          {#if i.url != ''}
            <a
              class="ellipsis inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href={i.url}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe float-left mr-2 size-3"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              {i.url}
            </a>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .ellipsis {
    display: flow;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
