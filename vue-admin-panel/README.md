# vue-admin-panel

Scaffolds a Vue.js-powered admin panel for a [Webrium](https://github.com/webrium/webrium) project: a controller, a dedicated layout, a Vite entry point, and a root Vue component — wired together and ready to build on.

Companion to the *Using Vue.js with Webrium* guide. This plugin automates the file-scaffolding part of that guide; the guide itself explains the reasoning behind every piece.

## Requirements

- A Webrium project with its default Vite setup in place.
- `webrium/core` **>= 5.2.0**. On an older core version, `vite_assets()` can silently drop the CSS `<link>` tag for this second Vite entry — see the note in `VUE-ADMIN-PANEL-SETUP.md` (installed at your project root) if you can't upgrade yet.
- `webrium/console` **>= 2.4.0** to see the setup instructions printed automatically right after install (see below). Not required for the install itself — on an older console version the plugin still installs everything correctly, you just won't get the automatic "Next steps:" printout, and read `VUE-ADMIN-PANEL-SETUP.md` yourself instead.
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
| `VUE-ADMIN-PANEL-SETUP.md` | The 3 remaining manual steps — see below |

## What the plugin can't do for you (3 steps)

Webrium's plugin installer can only copy new files into your project — it can't run shell commands or edit files you already have. So three small steps are still manual: installing the JS dependencies, registering the Vue plugin plus a second build entry in `vite.config.js`, and adding the `/admin` route.

On `webrium/console` >= 2.4.0, `plugin:install` prints these steps automatically right after installing (via the `post_install_message_file` manifest field, pointing at `VUE-ADMIN-PANEL-SETUP.md`). On an older console, or if you scroll past it, open `VUE-ADMIN-PANEL-SETUP.md` at your project root — it has the exact before/after `vite.config.js` diff and is written so an AI coding assistant can carry out the steps directly from it too. Delete the file once you're done.

Then `npm run dev` (or `npm run build` for production) and visit `/admin`.

## Files

- `definition.json` — the plugin's authoring definition (for `plugin:export`, if you want to rebuild the zip yourself).
- `src/` — the plain source files, exactly as installed (for reading without unzipping).
- `dist/vue-admin-panel-v1.0.0.zip` — the distributable package `plugin:install` consumes.
