# Finish setting up vue-admin-panel

The `vue-admin-panel` plugin just copied its files into your project. Three steps couldn't be automated (the plugin installer can only add new files — it can't run shell commands or edit files your project already has). Do these, then delete this file.

If you're an AI coding assistant reading this on behalf of the user: perform all three steps directly, based on the actual current content of the files involved (don't assume they match the snippets below verbatim) — then delete this file.

## 1. Install the JS dependencies

```bash
npm install vue @vitejs/plugin-vue
```

## 2. Register the Vue plugin and a second build entry in `vite.config.js`

Add the import, add `vue()` to the `plugins` array, and change `rollupOptions.input` from a single string into an object with an `admin` entry alongside the existing one. Everything else in the file stays the same. Before:

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
        admin: 'resources/js/admin.js',
      },
    },
  },
  // ...
}));
```

## 3. Add the route

In `app/Routes/Web.php`, add the import and the route:

```php
use App\Controllers\AdminController;

Route::get('/admin', [AdminController::class, 'index']);
```

## Verify

```bash
npm run dev
```

Visit `/admin` — you should see the placeholder admin panel. Then delete this file.
