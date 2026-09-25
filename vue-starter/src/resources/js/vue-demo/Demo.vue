<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="min-h-screen bg-base-200 p-6">
    <div class="max-w-md mx-auto bg-base-100 rounded-2xl shadow p-6">
      <h1 class="text-2xl font-bold mb-2">Vue.js on Webrium</h1>
      <p class="text-sm opacity-70 mb-4">
        Rendered by Vue, mounted inside a Webrium view.
      </p>

      <button class="btn btn-primary" @click="count++">
        Clicked {{ count }} times
      </button>
    </div>
  </div>
</template>
