<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  change: { type: String, default: '' },
  trend: { type: String, default: 'up' }, // 'up' | 'down'
});
</script>

<template>
  <div class="card bg-base-100 border border-base-300 shadow-sm">
    <div class="card-body p-5 gap-1">
      <span class="text-sm text-base-content/60">{{ label }}</span>
      <span class="text-3xl font-bold">{{ value }}</span>
      <span v-if="change" class="text-xs font-medium" :class="trend === 'up' ? 'text-success' : 'text-error'">
        {{ trend === 'up' ? '▲' : '▼' }} {{ change }}
        <span class="text-base-content/50 font-normal">vs last month</span>
      </span>
    </div>
  </div>
</template>
