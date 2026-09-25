# react-starter

Wires React into a [Webrium](https://github.com/webrium/webrium) project: a second Vite entry, a placeholder component, and a controller + layout to mount it — a minimal, working example proving React is set up correctly.

**This is not an admin panel, a dashboard, or any other real feature.** It's a starting point — the component it installs is a placeholder you're meant to replace. (A separate, actual admin-panel plugin exists for Vue — see [`vue-admin-panel`](../vue-admin-panel/) — but there isn't a React equivalent yet.)

## Requirements

- A Webrium project with its default Vite setup in place.
- `webrium/core` **>= 5.2.0**. On an older core version, `vite_assets()` can silently drop the CSS `<link>` tag for this second Vite entry — see the note in `REACT-STARTER-SETUP.md` (installed at your project root) if you can't upgrade yet.
- `webrium/console` with `.jsx` support in `plugin:install`'s file allowlist. This wasn't released as of this plugin's initial publish (it only allowed `.vue` among JS-like extensions) — installing on an older console fails with `Disallowed extension 'jsx'`. Check console's releases for the fix before installing.
- Node.js and npm.

## Install

```bash
php webrium plugin:install /path/to/react-starter-v1.0.0.zip
# or, from a URL:
php webrium plugin:install https://raw.githubusercontent.com/webrium/pub-plugins/main/react-starter/dist/react-starter-v1.0.0.zip
```

This creates:

| File | Purpose |
| --- | --- |
| `app/Controllers/ReactDemoController.php` | Renders the demo layout |
| `app/Views/layouts/ReactDemo.php` | The page shell — a single `#react-demo-app` mount point, plus the React Fast Refresh preamble (see below) |
| `resources/js/react-demo.jsx` | Vite entry point: creates and mounts the React app |
| `resources/js/react-demo/Demo.jsx` | Placeholder component — replace with your own UI |
| `REACT-STARTER-SETUP.md` | The 3 remaining manual steps — see below |

## What the plugin can't do for you (3 steps)

Webrium's plugin installer can only copy new files into your project — it can't run shell commands or edit files you already have. So three small steps are still manual: installing the JS dependencies, registering the React plugin plus a second build entry in `vite.config.js`, and adding the `/react-demo` route.

Right after installing (on `webrium/console` >= 2.3.1), you'll see:

```
Next steps:
Finish setting up react-starter:

  1. npm install react react-dom @vitejs/plugin-react
  2. Wire react() + the 'react-demo' entry into vite.config.js
  3. Add the /react-demo route

Full details (exact before/after diffs) are in REACT-STARTER-SETUP.md at your
project root — also written so an AI coding assistant can carry them out
directly. Delete it once done.
```

Open `REACT-STARTER-SETUP.md` for the exact before/after `vite.config.js` diff.

**A note on `@vitejs/plugin-react` version:** the latest major (6.x) requires Vite 8. Webrium's default scaffold ships Vite 7, so pin `@vitejs/plugin-react@5.2.0` (which supports Vite 4–8) instead of installing the plugin unpinned.

Then `npm run dev` (or `npm run build` for production) and visit `/react-demo`.

### Why `ReactDemo.php` has an extra script block

Unlike Vue, `@vitejs/plugin-react`'s Fast Refresh needs a small "preamble" script injected into the page *before* the module script loads. Vite normally injects this itself, but only for HTML files it serves and transforms directly — since Webrium renders this page as PHP, that hook never runs. `ReactDemo.php` adds the preamble by hand, gated behind `\Webrium\Vite::getInstance()->isDevelopment()` so it's a no-op in production. Without it, the page throws `Error: @vitejs/plugin-react can't detect preamble` and never renders.

## Files

- `definition.json` — the plugin's authoring definition (for `plugin:export`, if you want to rebuild the zip yourself).
- `src/` — the plain source files, exactly as installed (for reading without unzipping).
- `dist/react-starter-v1.0.0.zip` — the distributable package `plugin:install` consumes.
