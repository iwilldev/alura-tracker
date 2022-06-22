import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Tasks.vue'),
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Projects.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
