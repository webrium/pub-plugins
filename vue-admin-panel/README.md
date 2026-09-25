# vue-admin-panel

Scaffolds a Vue.js-powered admin panel for a [Webrium](https://github.com/webrium/webrium) project: a controller, a dedicated layout, a Vite entry point, and a root Vue component — wired together and ready to build on.

Companion to the *Using Vue.js with Webrium* guide. This plugin automates the file-scaffolding part of that guide; the guide itself explains the reasoning behind every piece.

## Requirements

- A Webrium project with its default Vite setup in place.
- `webrium/core` **>= 5.2.0**. On an older core version, `vite_assets()` can silently drop the CSS `<link>` tag for this second Vite entry — see the note in the guide if you can't upgrade yet.
- Node.js and npm.

## Install

```bash
php webrium plugin:install /path/to/vue-admin-panel-v1.0.0.zip
# or, from a URL:
php webrium plugin:install https://raw.githubusercontent.com/webrium/pub-plugins/main/vue-admin-panel/dist/vue-admin-panel-v1.0.0.zip
```

This creates:

| File | Purpose |
| --- | --- |
| `app/Controllers/AdminController.php` | Renders the admin layout |
| `app/Views/layouts/Admin.php` | The page shell — a single `#admin-app` mount point |
| `resources/js/admin.js` | Vite entry point: creates and mounts the Vue app |
| `resources/js/admin/Admin.vue` | Root component (a placeholder counter — replace with your own UI) |

## What the plugin can't do for you (3 steps)

Webrium's plugin installer can only copy new files into your project — it can't run shell commands or edit files you already have. So three small steps are still manual:

**1. Install the JS dependencies:**

```bash
npm install vue @vitejs/plugin-vue
```

**2. Register the Vue plugin and a second build entry in `vite.config.js`:**

```js
import { defineConfig } from 'vite';
import webrium from '@webrium/vite-plugin';
import vue from '@vitejs/plugin-vue'; // add this

export default defineConfig(({ command }) => ({
  plugins: [
    webrium(),
    vue(), // add this
  ],
  // ...unchanged...
  build: {
    // ...unchanged...
    rollupOptions: {
      input: {
        app: 'resources/js/app.js',
        admin: 'resources/js/admin.js', // add this
      },
    },
  },
  // ...unchanged...
}));
```

**3. Add the route**, in `app/Routes/Web.php`:

```php
use App\Controllers\AdminController;

Route::get('/admin', [AdminController::class, 'index']);
```

Then `npm run dev` (or `npm run build` for production) and visit `/admin`.

## Files

- `definition.json` — the plugin's authoring definition (for `plugin:export`, if you want to rebuild the zip yourself).
- `src/` — the plain source files, exactly as installed (for reading without unzipping).
- `dist/vue-admin-panel-v1.0.0.zip` — the distributable package `plugin:install` consumes.
