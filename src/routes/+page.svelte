<script>
  import Top from '$lib/block/Top.svelte'
  import About from '$lib/block/About.svelte'
  import WorkExperience from '$lib/block/WorkExperience.svelte'
  import Skills from '$lib/block/Skills.svelte'
  import Projects from '$lib/block/Projects.svelte'
  import Timeline from '$lib/block/Timeline.svelte'
</script>

<svelte:head>
  <title>Yimi CV</title>
  <meta name="description" content="Yimi的个人简历" />
</svelte:head>
<main class="relative mx-auto scroll-my-12 overflow-auto pt-14 container md:p-16 print:p-12">
  <section class="mx-auto max-w-2xl w-full 2xl:max-w-6xl space-y-8 print:space-y-6">
    <Top />
    <About />
    <Skills />
    <WorkExperience />
    <!--        <Education/>-->
    <Projects />
    <Timeline />
  </section>
</main>
