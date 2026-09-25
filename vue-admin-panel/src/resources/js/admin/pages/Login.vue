<script setup>
// View only — no real authentication wired up. Replace @submit.prevent
// with a real handler once you have a backend endpoint for it.
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200 p-4">
    <div class="card w-full max-w-sm bg-base-100 border border-base-300 shadow-sm">
      <div class="card-body gap-2">
        <div class="flex flex-col items-center gap-2 mb-2">
          <div class="w-12 h-12 rounded-lg bg-primary text-primary-content flex items-center justify-center font-bold text-xl">
            A
          </div>
          <h1 class="text-xl font-bold">Sign in to Admin Panel</h1>
          <p class="text-sm text-base-content/60 text-center">Welcome back — enter your details below.</p>
        </div>

        <form class="space-y-4" @submit.prevent>
          <label class="form-control w-full">
            <div class="label"><span class="label-text">Email address</span></div>
            <input type="email" placeholder="you@example.com" class="input input-bordered w-full" required />
          </label>

          <label class="form-control w-full">
            <div class="label"><span class="label-text">Password</span></div>
            <input type="password" placeholder="••••••••" class="input input-bordered w-full" required />
          </label>

          <label class="label cursor-pointer justify-start gap-2 p-0">
            <input type="checkbox" class="checkbox checkbox-sm" />
            <span class="label-text">Remember me</span>
          </label>

          <button type="submit" class="btn btn-primary w-full">Sign in</button>
        </form>

        <p class="text-center text-sm text-base-content/60 mt-2">
          Don't have an account?
          <router-link to="/register" class="link link-primary">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
