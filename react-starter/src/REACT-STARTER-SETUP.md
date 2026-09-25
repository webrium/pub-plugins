# Finish setting up react-starter

The `react-starter` plugin just copied its files into your project. Three steps couldn't be automated (the plugin installer can only add new files — it can't run shell commands or edit files your project already has). Do these, then delete this file.

If you're an AI coding assistant reading this on behalf of the user: perform all three steps directly, based on the actual current content of the files involved (don't assume they match the snippets below verbatim) — then delete this file.

## 1. Install the JS dependencies

```bash
npm install react react-dom @vitejs/plugin-react
```

## 2. Register the React plugin and a second build entry in `vite.config.js`

Add the import, add `react()` to the `plugins` array, and change `rollupOptions.input` from a single string into an object with a `react-demo` entry alongside the existing one. Everything else in the file stays the same. Before:

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
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [
    webrium(),
    react(),
  ],
  // ...
  build: {
    // ...
    rollupOptions: {
      input: {
        app: 'resources/js/app.js',
        'react-demo': 'resources/js/react-demo.jsx',
      },
    },
  },
  // ...
}));
```

## 3. Add the route

In `app/Routes/Web.php`, add the import and the route:

```php
use App\Controllers\ReactDemoController;

Route::get('/react-demo', [ReactDemoController::class, 'index']);
```

## Verify

```bash
npm run dev
```

Visit `/react-demo` — you should see a small placeholder page confirming React is wired up. Then delete this file.

## What's next

This plugin only proves React is wired into your project correctly — the component is a placeholder, not a real feature. Build whatever you actually need on top of it (an admin panel, a dashboard, etc.), or replace `resources/js/react-demo/Demo.jsx` entirely.
