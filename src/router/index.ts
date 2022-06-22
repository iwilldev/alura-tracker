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
    children: [
      {
        path: '',
        name: 'ListaDeProjetos',
        component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Projects/List.vue'),
      },
      {
        path: 'novo',
        name: 'NovoProjeto',
        component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Projects/Form.vue'),
      },
      {
        path: ':id/editar',
        name: 'EditarProjeto',
        component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Projects/Form.vue'),
        props: true,
      },
      {
        path: ':id/remover',
        name: 'RemoverProjeto',
        component: () => import(/* webpackChunkName: "tasks" */ '@/pages/Projects/Remove.vue'),
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
