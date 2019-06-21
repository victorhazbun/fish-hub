import { Router } from 'svelte-easyroute-webpack'
import App from '../App.svelte'
import Baits from '../components/Baits.svelte';
import TackleBox from '../components/TackleBox.svelte';
import Activity from '../components/Activity.svelte';

export var router = new Router({
  mode: "hash", // "hash" or "history"
  routes:[
    {
      path: '/',
      component: Baits,
      name: 'Baits'
    },
    {
      path: '/baits',
      component: Baits,
      name: 'Baits'
    },
    {
      path: '/tackle-box',
      component: TackleBox,
      name: 'Tackle Box'
    },
    {
      path: '/activity',
      component: Activity,
      name: 'Activity'
    },
  ]
})

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    target: document.querySelector('#app'),
    hydratable: true,
    props: {
      router
    }
  });
})

