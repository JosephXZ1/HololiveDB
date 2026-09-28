import { createRouter, createWebHistory } from 'vue-router'

//Importar aquí las páginas de las rutas
import Home from '@/pages/home.vue'
import SandBox from '@/pages/sandBox.vue'

//Arreglo de rutas
const routes =
[
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/sandBox',
    component: SandBox,
    //Regla unica y detergente para que header no se renderice en sandBox
    meta: 
      {
        ocultarHeader: true
      }
  },  
]

const router = createRouter(
{
    history: createWebHistory(),
    routes
})

export default router
