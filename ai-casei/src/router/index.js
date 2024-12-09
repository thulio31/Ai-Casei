import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Joao from '@/components/Fotografo/Joao.vue'
import Ana from '@/components/Fotografo/Ana.vue'
import Paulo from '@/components/Fotografo/Paulo.vue'
import Fabiano from '@/components/Fotografo/Fabiano.vue'
import Fotografos from '@/components/Fotografo/Fotografos.vue'
import Lugares from '@/components/Lugares/Lugares.vue'
import praiacosta from '@/components/Lugares/praiacosta.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import profile from '@/components/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    ,
    {
      path: "/profile",
      name: "Profile",
      component: profile,
  },
    {
      path: "/login",
      name: "Login",
      component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
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
    },
    
    {
      path: '/Lugares',
      name: 'Lugares',
      component: Lugares,
    },

    {
      path: '/praiacosta',
      name: 'praiacosta',
      component: praiacosta,
    }
  ],
})

export default router
