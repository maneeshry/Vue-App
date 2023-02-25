import LoginPage from './components/Login.vue'
import HomePage from './components/Home.vue'
import { createRouter,createWebHistory } from 'vue-router'


const routes = [
  {
    name: 'login',
    component: LoginPage,
    path: '/login'
  },
  {
    name: 'home',
    component: HomePage,
    path: '/home' 
    
  },
  {
    name: '/',
    component: LoginPage,
    path: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


