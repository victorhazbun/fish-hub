<!-- JS -->

<script>
  import { onMount } from 'svelte'
  import RouterLink from 'svelte-easyroute-webpack/RouterLink.svelte'
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  export let router

  onMount(() => router.createOutlet())
</script>

<!-- HTML -->

<Header/>
<div id="content">
  <!-- component matched by the route renders below -->
  <div id="router-outlet"></div>
</div>
<Footer/>

<!-- CSS -->

<style></style>

