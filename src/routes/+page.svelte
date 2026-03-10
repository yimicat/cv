<script lang="ts">
  import Top from '$lib/block/Top.svelte'
  import About from '$lib/block/About.svelte'
  import WorkExperience from '$lib/block/WorkExperience.svelte'
  import Skills from '$lib/block/Skills.svelte'
  import Projects from '$lib/block/Projects.svelte'
  import Timeline from '$lib/block/Timeline.svelte'

  import { Turnstile } from 'svelte-turnstile'
  import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public'

  import { enhance } from '$app/forms'
  export let form

  export let data
  let formRef
</script>

<svelte:head>
  <title>Yimi CV</title>
  <meta name="description" content="Yimi的个人简历" />
</svelte:head>
<main class="relative mx-auto scroll-my-12 overflow-auto pt-14 container md:p-16 print:p-12">
  <section class="mx-auto max-w-2xl w-full space-y-8 print:space-y-6">
    {#if data.isCheck}
      <div class="mx-25 border rounded-md bg-background py-18">
        <form method="POST" use:enhance bind:this={formRef} class="text-center">
          <div class="pb-10px text-xl">你是机器人吗？</div>
          <div class="pb-10px text-sm">请稍等，让我来检测一下吧~</div>
          <Turnstile
            siteKey={PUBLIC_TURNSTILE_SITE_KEY}
            on:callback={event => {
              formRef.submit()
            }}
          />
        </form>

        <p style="margin-top: 8px;">
          {#if form}
            {form.message}
          {/if}
        </p>
      </div>
    {/if}

    {#if data.isCheck === false || (form && form.success)}
      <!-- ✅ 真正首页内容（同一页） -->
      <Top />
      <About />
      <Skills />
      <WorkExperience />
      <!--        <Education/>-->
      <Projects />
      <Timeline />
    {/if}
  </section>
</main>
