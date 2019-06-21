import App from '../App.svelte';
import { view } from '../utilities/stores.js';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('app');
  view.set(target.dataset.selectedView);

  const app = new App({
    target: target
  });
})

