<script setup>
import { useRoute } from 'vue-router';
import Icon from './Icon.vue';
import { useTheme } from '../theme';

const route = useRoute();
const { theme, toggle } = useTheme();
</script>

<template>
  <header class="h-16 flex items-center justify-between gap-4 px-4 md:px-6 border-b border-base-300 bg-base-100 shrink-0">
    <div class="flex items-center gap-3">
      <label for="admin-drawer" class="btn btn-square btn-ghost lg:hidden" aria-label="Open sidebar">
        <Icon name="menu" />
      </label>
      <h1 class="text-lg font-semibold">{{ route.meta.title }}</h1>
    </div>

    <div class="flex items-center gap-2">
      <button
        type="button"
        class="btn btn-ghost btn-circle"
        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggle"
      >
        <Icon :name="theme === 'dark' ? 'sun' : 'moon'" />
      </button>

      <button type="button" class="btn btn-ghost btn-circle" aria-label="Notifications">
        <Icon name="bell" />
      </button>

      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar placeholder">
          <div class="bg-neutral text-neutral-content w-9 rounded-full">
            <span class="text-sm">JD</span>
          </div>
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-10 mt-3 w-44 p-2 shadow">
          <li><a>Profile</a></li>
          <li><a>Account settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>
