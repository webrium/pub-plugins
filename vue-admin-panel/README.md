# vue-admin-panel

A real, standard admin panel for a [Webrium](https://github.com/webrium/webrium) project — built with Vue.js, Vue Router, Tailwind CSS, and daisyUI. Sidebar navigation, a top bar with a light/dark theme toggle, and a fully-built sample dashboard (stat cards + activity table), plus Users and Settings as lighter starting points. General-purpose enough to drop into any project and build on.

Companion to the *Using Vue.js with Webrium* guide, and a step up from the [`vue-starter`](../vue-starter/) plugin — that one is a bare-bones proof that Vue is wired in; this one is an actual usable admin panel shell.

## What's inside

| Page | What it shows |
| --- | --- |
| Dashboard (`/admin`) | 4 stat cards (revenue, users, orders, conversion) + a recent-activity table — sample data, styled like a real product |
| Users (`/admin/users`) | A sample user list table (name, email, role, status) |
| Settings (`/admin/settings`) | A sample settings form (name, email, a toggle) |
| Login (`/admin/login`) | A centered sign-in card — **view only, no authentication wired up** |
| Register (`/admin/register`) | A centered sign-up card — **view only, no authentication wired up** |

All data is static/sample — wire it up to your own backend once you're happy with the shell. Navigation between Dashboard/Users/Settings uses Vue Router (client-side), so it's instant after the first load.

Login and Register render full-screen, without the sidebar/top bar (see `meta.layout: 'auth'` in `router.js` and the check in `App.vue`) — they're meant to replace whatever real auth flow you build, not to sit inside the panel chrome.

## Requirements

- A Webrium project with its default Vite setup in place (Tailwind CSS and daisyUI are already part of that default — nothing extra to install for styling).
- `webrium/core` **>= 5.2.0**. On an older core version, `vite_assets()` can silently drop the CSS `<link>` tag for this second Vite entry — see the note in `ADMIN-PANEL-SETUP.md` (installed at your project root) if you can't upgrade yet.
- `webrium/console` **>= 2.4.0** to see the setup pointer printed automatically right after install. Not required for the install itself — on an older console version the plugin still installs everything correctly, you just won't get the automatic "Next steps:" line, and read `ADMIN-PANEL-SETUP.md` yourself instead.
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
| `app/Controllers/AdminController.php` | Serves the SPA shell for `/admin` and every `/admin/<page>` |
| `app/Views/layouts/Admin.php` | The page shell — a single `#admin-app` mount point |
| `resources/js/admin.js` | Vite entry point: creates the Vue app, installs the router, mounts it |
| `resources/js/admin/App.vue` | Root layout — daisyUI `drawer` (sidebar + top bar + `<router-view>`) |
| `resources/js/admin/router.js` | Vue Router config (3 routes: dashboard, users, settings) |
| `resources/js/admin/components/*.vue` | `Sidebar`, `Topbar`, `StatCard`, `Icon` (a small inline icon set — no icon library dependency) |
| `resources/js/admin/pages/*.vue` | `Dashboard`, `Users`, `Settings` |
| `ADMIN-PANEL-SETUP.md` | The 3 remaining manual steps — see below |

## What the plugin can't do for you (3 steps)

Webrium's plugin installer can only copy new files into your project — it can't run shell commands or edit files you already have. So three small steps are still manual: installing the JS dependencies, registering the Vue plugin plus a second build entry in `vite.config.js`, and adding the route.

Right after installing (on `webrium/console` >= 2.4.0), you'll see:

```
Next steps:
Finish setting up vue-admin-panel:

  1. npm install vue vue-router @vitejs/plugin-vue
  2. Wire vue() + the 'admin' entry into vite.config.js
  3. Add the /admin/{page?} route

Full details (exact before/after diffs, and why the route needs {page?}) are in
ADMIN-PANEL-SETUP.md at your project root — also written so an AI coding
assistant can carry them out directly. Delete it once done.
```

**Note the `{page?}` in the route** — the panel uses Vue Router internally, so the one PHP route has to answer for `/admin` *and* every `/admin/<page>` URL, or a hard refresh on `/admin/users` would 404. `ADMIN-PANEL-SETUP.md` has the exact line to add.

Then `npm run dev` (or `npm run build` for production) and visit `/admin`.

## Files

- `definition.json` — the plugin's authoring definition (for `plugin:export`, if you want to rebuild the zip yourself).
- `src/` — the plain source files, exactly as installed (for reading without unzipping).
- `dist/vue-admin-panel-v1.0.0.zip` — the distributable package `plugin:install` consumes.
