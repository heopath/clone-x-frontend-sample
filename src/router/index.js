import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import MainPage from '../views/MainPage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        next('/main');
      } else {
        next();
      }
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        next('/main');
      } else {
        next();
      }
    },
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        next();
      } else {
        next('/');
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const validPaths = ['/', '/signup', '/main'];
  if (validPaths.includes(to.path)) {
    next();
  } else {
    next('/');
  }
});

export default router;