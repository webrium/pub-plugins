<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Admin Panel</title>

  <!-- Set the theme before anything paints, so there's no flash of the
       wrong theme while the Vue bundle loads. Kept in sync at runtime by
       resources/js/admin/theme.js. -->
  <script>
    (function () {
      var stored = localStorage.getItem('admin-panel-theme');
      var theme = stored === 'light' || stored === 'dark'
        ? stored
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>

  <!-- Vue admin bundle (Vite: CSS & JS) -->
  @raw( vite_assets('resources/js/admin.js') )
</head>

<body>
  <!-- Vue mounts here -->
  <div id="admin-app"></div>
</body>

</html>
