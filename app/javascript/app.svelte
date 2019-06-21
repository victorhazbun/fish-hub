<!-- HTML -->

<Header/>
<svelte:component this={selectedView.view}/>
<Footer/>

<!-- JS -->

<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Activity from './views/Activity.svelte';
  import Baits from './views/Baits.svelte';
  import TackleBox from './views/TackleBox.svelte';
  import { view } from './utilities/stores.js';

  const options = [
    { name: 'Activity', view: Activity },
    { name: 'Baits', view: Baits },
    { name: 'TackleBox',  view: TackleBox  },
  ];

  let selectedViewName = $view;
  let selectedView = options.find(option => option.name === selectedViewName );
</script>

