import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";





const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue'), // Lazy-loaded
  },
  {
    path: '/cadastro',
    name: 'CadastroFretes',
    component: () => import('../components/CadastrarFretes.vue'), // Lazy-loaded
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: () => import('../components/Mapa.vue'), // Lazy-loaded
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
