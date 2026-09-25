import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Users from './pages/Users.vue';
import Settings from './pages/Settings.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard, meta: { title: 'Dashboard' } },
  { path: '/users', name: 'users', component: Users, meta: { title: 'Users' } },
  { path: '/settings', name: 'settings', component: Settings, meta: { title: 'Settings' } },
  // layout: 'auth' — rendered full-screen by App.vue, without the
  // sidebar/top bar chrome (see App.vue). View only, not wired to a real
  // authentication flow.
  { path: '/login', name: 'login', component: Login, meta: { title: 'Login', layout: 'auth' } },
  { path: '/register', name: 'register', component: Register, meta: { title: 'Register', layout: 'auth' } },
];

const router = createRouter({
  // Base '/admin' because the PHP side serves this same SPA shell for
  // /admin and every /admin/<page> path (see the {page?} route parameter
  // in AdminController's route) — the browser URL and the client-side
  // router path stay in sync, so a hard refresh on /admin/users still
  // lands on the right page instead of 404ing.
  history: createWebHistory('/admin'),
  routes,
});

export default router;
