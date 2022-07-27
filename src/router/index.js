import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Presidencia from '../views/PresidenciaGuatemala.vue'
import Documentos from '../views/Documentos.vue'
import SalaDePrensa from '../views/SalaDePrensa.vue'
import Agenda from '../views/AgendaYActividades.vue'
import IXCumbre from '../views/IXCumbre.vue'
import AECpage from '../views/AECPage.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/presidencia',
      name: 'Presidencia Guatemala',
      component: Presidencia
    },
    {
      path: '/documentos',
      name: 'Documentos',
      component: Documentos
    },
    {
      path: '/saladeprensa',
      name: 'Sala De Prensa',
      component: SalaDePrensa
    },
    {
      path: '/agenda',
      name: 'Agenda Y Actividades',
      component: Agenda
    },
    {
      path: '/ixcumbre',
      name: 'IX Cumbre Jefes de Estado',
      component: IXCumbre
    },
    {
      path: '/aec',
      name: 'AEC',
      component: AECpage
    }
  ]
})

export default router
