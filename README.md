## Setup

- `bundle install`
- `rails db:setup`
- `gem install foreman`
- `foreman start`

## A poor man design

- SSR instead of SPA
- Only one JS app, `packs/application.js`
- Using `svelte/store` to set the selected view-component
- When a page is rendered in the backend it sets its corresponding JS view-component, thanks to `svelte:component`

## Tentative refactors

- I would use different `packs` per page (maybe re-use some of them here and there)
- Cleanup the `App.svelte` file, specially the list of `options`

## Notes

- This is just an experiment to see what kind of crazy things I can do with Svelte and Rails
- Svelte routing system is immature (ATM)