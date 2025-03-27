<script>
  import '@unocss/reset/tailwind.css'
  import '../style/global.scss'
  import 'virtual:uno.css'
  import Header from '$lib/layout/Header.svelte'
  import Footer from '$lib/layout/Footer.svelte'
  import LoveClick from '$lib/components/LoveClick.svelte'
</script>

<LoveClick />
<div class="app">
  <Header />

  <slot />

  <Footer />
</div>
