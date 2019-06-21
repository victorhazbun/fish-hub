<script>
  import { onMount } from 'svelte'
  import RouterLink from 'svelte-easyroute-webpack/RouterLink.svelte'

  export let router

  onMount(() => router.createOutlet())
</script>

<style></style>

<div id="router-outlet"></div>