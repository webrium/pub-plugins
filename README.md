# pub-plugins

Public, general-purpose plugins for the [Webrium](https://github.com/webrium/webrium) framework, installable with `webrium/console`'s plugin system (`php webrium plugin:install`).

Each plugin lives in its own top-level directory:

| Plugin | Description |
| --- | --- |
| [`vue-starter`](vue-starter/) | Minimal Vue.js integration: a second Vite entry, a placeholder component, and a controller + layout to mount it |
| [`vue-admin-panel`](vue-admin-panel/) | A real admin panel: Vue Router, sidebar + top bar (Tailwind/daisyUI), a sample dashboard, users list, and settings form |
| [`react-starter`](react-starter/) | Minimal React integration: a second Vite entry, a placeholder component, and a controller + layout to mount it |

## Installing a plugin

```bash
php webrium plugin:install ./pub-plugins/<plugin-name>/dist/<plugin-name>-v<version>.zip
```

See each plugin's own `README.md` for what it installs and any manual steps it can't automate (the plugin installer only copies new files — it can't run shell commands or edit files your project already has).

## Layout of a plugin directory

```
<plugin-name>/
  definition.json   # authoring definition, for `plugin:export` (see webrium/console docs → Plugins)
  README.md         # what it installs, requirements, any manual follow-up steps
  src/              # plain source files, exactly as installed — readable without unzipping
  dist/             # the built, distributable .zip that plugin:install actually consumes
```

For the plugin system itself — the `plugin.json` format, lifecycle hooks, `plugin:new` / `plugin:export` — see *Console → Plugins* in the [Webrium docs](https://github.com/webrium/docs).
