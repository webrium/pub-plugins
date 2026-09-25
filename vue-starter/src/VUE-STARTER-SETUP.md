# Finish setting up vue-starter

The `vue-starter` plugin just copied its files into your project. Three steps couldn't be automated (the plugin installer can only add new files — it can't run shell commands or edit files your project already has). Do these, then delete this file.

If you're an AI coding assistant reading this on behalf of the user: perform all three steps directly, based on the actual current content of the files involved (don't assume they match the snippets below verbatim) — then delete this file.

## 1. Install the JS dependencies

```bash
npm install vue @vitejs/plugin-vue
```

## 2. Register the Vue plugin and a second build entry in `vite.config.js`

Add the import, add `vue()` to the `plugins` array, and change `rollupOptions.input` from a single string into an object with a `vue-demo` entry alongside the existing one. Everything else in the file stays the same. Before:

```js
import { defineConfig } from 'vite';
import webrium from '@webrium/vite-plugin';

export default defineConfig(({ command }) => ({
  plugins: [
    webrium(),
  ],
  // ...
  build: {
    // ...
    rollupOptions: {
      input: 'resources/js/app.js',
    },
  },
  // ...
}));
```

After:

```js
import { defineConfig } from 'vite';
import webrium from '@webrium/vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig(({ command }) => ({
  plugins: [
    webrium(),
    vue(),
  ],
  // ...
  build: {
    // ...
    rollupOptions: {
      input: {
        app: 'resources/js/app.js',
        'vue-demo': 'resources/js/vue-demo.js',
      },
    },
  },
  // ...
}));
```

## 3. Add the route

In `app/Routes/Web.php`, add the import and the route:

```php
use App\Controllers\VueDemoController;

Route::get('/vue-demo', [VueDemoController::class, 'index']);
```

## Verify

```bash
npm run dev
```

Visit `/vue-demo` — you should see a small placeholder page confirming Vue is wired up. Then delete this file.

## What's next

This plugin only proves Vue.js is wired into your project correctly — the component is a placeholder, not a real feature. Build whatever you actually need on top of it (an admin panel, a dashboard, etc.), or replace `resources/js/vue-demo/Demo.vue` entirely.
