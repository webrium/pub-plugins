<script setup>
import { useRoute } from 'vue-router';
import Icon from './Icon.vue';

const route = useRoute();

const navItems = [
  { name: 'dashboard', label: 'Dashboard', to: '/', icon: 'home' },
  { name: 'users', label: 'Users', to: '/users', icon: 'users' },
  { name: 'settings', label: 'Settings', to: '/settings', icon: 'settings' },
];
</script>

<template>
  <aside class="bg-base-100 w-72 min-h-full flex flex-col border-r border-base-300">
    <div class="h-16 flex items-center gap-3 px-5 border-b border-base-300 shrink-0">
      <div class="w-9 h-9 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold">
        A
      </div>
      <span class="font-semibold text-lg">Admin Panel</span>
    </div>

    <ul class="menu p-4 flex-1 gap-1 text-base-content">
      <li v-for="item in navItems" :key="item.name">
        <router-link :to="item.to" :class="{ active: route.name === item.name }">
          <Icon :name="item.icon" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>

    <div class="p-4 border-t border-base-300">
      <button type="button" class="btn btn-ghost btn-block justify-start gap-3">
        <Icon name="logout" />
        Logout
      </button>
    </div>
  </aside>
</template>
