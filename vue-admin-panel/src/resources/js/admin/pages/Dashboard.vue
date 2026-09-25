<script setup>
import StatCard from '../components/StatCard.vue';

const stats = [
  { label: 'Total Revenue', value: '$48,200', change: '12.4%', trend: 'up' },
  { label: 'Active Users', value: '2,318', change: '8.1%', trend: 'up' },
  { label: 'New Orders', value: '164', change: '3.2%', trend: 'down' },
  { label: 'Conversion Rate', value: '4.6%', change: '0.8%', trend: 'up' },
];

const recentActivity = [
  { name: 'Sarah Miller', action: 'Created a new order', time: '2 minutes ago', status: 'Completed' },
  { name: 'James Carter', action: 'Updated account settings', time: '18 minutes ago', status: 'Completed' },
  { name: 'Priya Nair', action: 'Requested a refund', time: '1 hour ago', status: 'Pending' },
  { name: 'Tom Becker', action: 'Signed up', time: '3 hours ago', status: 'Completed' },
  { name: 'Lena Fischer', action: 'Cancelled subscription', time: 'Yesterday', status: 'Cancelled' },
];

const statusBadge = {
  Completed: 'badge-success',
  Pending: 'badge-warning',
  Cancelled: 'badge-error',
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold">Welcome back</h2>
      <p class="text-base-content/60">Here's what's happening with your project today.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard v-for="stat in stats" :key="stat.label" v-bind="stat" />
    </div>

    <div class="card bg-base-100 border border-base-300 shadow-sm">
      <div class="card-body p-0">
        <div class="p-5 pb-0">
          <h3 class="font-semibold">Recent Activity</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Action</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in recentActivity" :key="row.name + row.time">
                <td class="font-medium">{{ row.name }}</td>
                <td class="text-base-content/70">{{ row.action }}</td>
                <td class="text-base-content/50">{{ row.time }}</td>
                <td>
                  <span class="badge badge-sm" :class="statusBadge[row.status]">{{ row.status }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
