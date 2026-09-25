<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>React Demo</title>

  <?php if (\Webrium\Vite::getInstance()->isDevelopment()): ?>
  <!-- React Fast Refresh preamble. @vitejs/plugin-react normally injects this
       itself via Vite's HTML transform, which only runs for files Vite serves
       directly — since this page is rendered by PHP instead, it has to be
       added by hand or Fast Refresh throws "can't detect preamble". -->
  <script type="module">
    import RefreshRuntime from 'http://localhost:5173/@react-refresh'
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  </script>
  <?php endif; ?>

  <!-- React demo bundle (Vite: CSS & JS) -->
  @raw( vite_assets('resources/js/react-demo.jsx') )
</head>

<body>
  <!-- React mounts here -->
  <div id="react-demo-app"></div>
</body>

</html>
