<script setup>
import { ref } from 'vue';

const name = ref('Jane Doe');
const email = ref('jane.doe@example.com');
const notifications = ref(true);
</script>

<template>
  <div class="space-y-6 max-w-2xl">
    <div>
      <h2 class="text-2xl font-bold">Settings</h2>
      <p class="text-base-content/60">Sample form — wire this up to your own settings.</p>
    </div>

    <div class="card bg-base-100 border border-base-300 shadow-sm">
      <div class="card-body gap-4">
        <label class="form-control w-full">
          <div class="label"><span class="label-text">Full name</span></div>
          <input v-model="name" type="text" class="input input-bordered w-full" />
        </label>

        <label class="form-control w-full">
          <div class="label"><span class="label-text">Email address</span></div>
          <input v-model="email" type="email" class="input input-bordered w-full" />
        </label>

        <label class="label cursor-pointer justify-start gap-3">
          <input v-model="notifications" type="checkbox" class="toggle toggle-primary" />
          <span class="label-text">Email notifications</span>
        </label>

        <div class="card-actions justify-end pt-2">
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
