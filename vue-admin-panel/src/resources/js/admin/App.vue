<script setup>
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Topbar from './components/Topbar.vue';

const route = useRoute();
</script>

<template>
  <!-- Auth pages (login/register) render full-screen, without the
       sidebar/top bar — see meta.layout in router.js. -->
  <router-view v-if="route.meta.layout === 'auth'" />

  <div v-else class="drawer lg:drawer-open">
    <input id="admin-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col min-h-screen bg-base-200">
      <Topbar />

      <main class="flex-1 p-4 md:p-6">
        <router-view />
      </main>
    </div>

    <div class="drawer-side z-30">
      <label for="admin-drawer" aria-label="Close sidebar" class="drawer-overlay"></label>
      <Sidebar />
    </div>
  </div>
</template>
