<script setup>
const users = [
  { name: 'Sarah Miller', email: 'sarah.miller@example.com', role: 'Admin', status: 'Active' },
  { name: 'James Carter', email: 'james.carter@example.com', role: 'Editor', status: 'Active' },
  { name: 'Priya Nair', email: 'priya.nair@example.com', role: 'Member', status: 'Invited' },
  { name: 'Tom Becker', email: 'tom.becker@example.com', role: 'Member', status: 'Active' },
  { name: 'Lena Fischer', email: 'lena.fischer@example.com', role: 'Member', status: 'Suspended' },
];

const statusBadge = {
  Active: 'badge-success',
  Invited: 'badge-warning',
  Suspended: 'badge-error',
};
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold">Users</h2>
        <p class="text-base-content/60">Sample data — replace with a real users list.</p>
      </div>
      <button type="button" class="btn btn-primary">Add user</button>
    </div>

    <div class="card bg-base-100 border border-base-300 shadow-sm">
      <div class="card-body p-0">
        <div class="overflow-x-auto">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th class="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.email">
                <td class="font-medium">{{ user.name }}</td>
                <td class="text-base-content/70">{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>
                  <span class="badge badge-sm" :class="statusBadge[user.status]">{{ user.status }}</span>
                </td>
                <td class="text-right">
                  <button type="button" class="btn btn-ghost btn-xs">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
