import { ref } from 'vue';

const STORAGE_KEY = 'admin-panel-theme';

function initial() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const theme = ref(initial());

function apply(value) {
  document.documentElement.setAttribute('data-theme', value);
  localStorage.setItem(STORAGE_KEY, value);
}

// Apply immediately on module load too (in addition to the inline
// anti-flash script in Admin.php) so the toggle button's own state is
// always in sync with the actual attribute on <html>.
apply(theme.value);

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    apply(theme.value);
  }

  return { theme, toggle };
}
