import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Joao from '@/components/Fotografo/Joao.vue'
import Ana from '@/components/Fotografo/Ana.vue'
import Paulo from '@/components/Fotografo/Paulo.vue'
import Fabiano from '@/components/Fotografo/Fabiano.vue'
import Fotografos from '@/components/Fotografos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Espacos',
      name: 'Espacos',
      component: () => import('../views/Espacos.vue'),
    },
    
    {
      path: '/Noivos',
      name: 'Noivos',
      component: () => import('../views/Noivos.vue'),
    },
    {
      path: '/Servicos',
      name: 'Servicos',
      component: () => import('../views/Servicos.vue'),
    },
    
    {
      path: '/LuaDeMel',
      name: 'LuaDeMel',
      component: () => import('../views/LuaMel.vue'),
    },
    
    {
      path: '/Fotografos',
      name: 'Fotografos',
      component: Fotografos,
    },
    
    {
      path: '/Joao',
      name: 'Joao',
      component: Joao,
    },

    {
      path: '/Ana',
      name: 'Ana',
      component: Ana,
    },
    {
      path: '/Paulo',
      name: 'Paulo',
      component: Paulo,
    },
    {
      path: '/Fabiano',
      name: 'Fabiano',
      component: Fabiano,
    }
  ],
})

export default router
