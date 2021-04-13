import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:id',
    name: 'Home',
    component: Home,
    props: true,
    meta: {
      requiresAuth :true
    }
    
  },
  {
    path: '/detail/:movie_id',
    name: 'Detail',
    component: Detail,
    props: true,
    meta: {
      requiresAuth :true
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login
    
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth :true
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      requiresAuth :true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.auth !== true) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
