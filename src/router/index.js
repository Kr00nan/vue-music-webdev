import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Home from '@/components/Home'
import Itunes from '@/components/Itunes'
import MyTunes from '@/components/MyTunes'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',    
    name: 'Auth',
    component: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home  
  },
  {
    path: '/itunes',
    name: 'Itunes',
    component: Itunes
  },
  {
    path: '/mytunes',
    name: 'MyTunes',
    component: MyTunes
  }
]
})