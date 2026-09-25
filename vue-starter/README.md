# vue-starter

Wires Vue.js into a [Webrium](https://github.com/webrium/webrium) project: a second Vite entry, a placeholder component, and a controller + layout to mount it — a minimal, working example proving Vue is set up correctly.

**This is not an admin panel, a dashboard, or any other real feature.** It's a starting point — the component it installs is a placeholder you're meant to replace. (A separate, actual admin-panel plugin is planned but not part of this one.)

Companion to the *Using Vue.js with Webrium* guide. This plugin automates the file-scaffolding part of that guide; the guide itself explains the reasoning behind every piece.

## Requirements

- A Webrium project with its default Vite setup in place.
- `webrium/core` **>= 5.2.0**. On an older core version, `vite_assets()` can silently drop the CSS `<link>` tag for this second Vite entry — see the note in `VUE-STARTER-SETUP.md` (installed at your project root) if you can't upgrade yet.
- `webrium/console` **>= 2.4.0** to see the setup pointer printed automatically right after install (see below). Not required for the install itself — on an older console version the plugin still installs everything correctly, you just won't get the automatic "Next steps:" line, and read `VUE-STARTER-SETUP.md` yourself instead.
- Node.js and npm.

## Install

```bash
php webrium plugin:install /path/to/vue-starter-v1.0.0.zip
# or, from a URL:
php webrium plugin:install https://raw.githubusercontent.com/webrium/pub-plugins/main/vue-starter/dist/vue-starter-v1.0.0.zip
```

This creates:

| File | Purpose |
| --- | --- |
| `app/Controllers/VueDemoController.php` | Renders the demo layout |
| `app/Views/layouts/VueDemo.php` | The page shell — a single `#vue-demo-app` mount point |
| `resources/js/vue-demo.js` | Vite entry point: creates and mounts the Vue app |
| `resources/js/vue-demo/Demo.vue` | Placeholder component — replace with your own UI |
| `VUE-STARTER-SETUP.md` | The 3 remaining manual steps — see below |

## What the plugin can't do for you (3 steps)

Webrium's plugin installer can only copy new files into your project — it can't run shell commands or edit files you already have. So three small steps are still manual: installing the JS dependencies, registering the Vue plugin plus a second build entry in `vite.config.js`, and adding the `/vue-demo` route.

Right after installing (on `webrium/console` >= 2.4.0), you'll see a short pointer:

```
Next steps:
To finish setup, read and follow VUE-STARTER-SETUP.md at your project root ...
```

Open `VUE-STARTER-SETUP.md` — it has the exact before/after `vite.config.js` diff and is written so an AI coding assistant can carry out the steps directly from it too. Delete the file once you're done.

Then `npm run dev` (or `npm run build` for production) and visit `/vue-demo`.

## Files

- `definition.json` — the plugin's authoring definition (for `plugin:export`, if you want to rebuild the zip yourself).
- `src/` — the plain source files, exactly as installed (for reading without unzipping).
- `dist/vue-starter-v1.0.0.zip` — the distributable package `plugin:install` consumes.
