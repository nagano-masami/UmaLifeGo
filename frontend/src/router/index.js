import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../components/pages/Login.vue'
import Home from '../components/pages/Home.vue'
import UserChat from "../components/parts/UserChat.vue";
import TopPage from "../components/parts/TopPage.vue";

Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'Login',
//     component: Login
//   },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/top',
        name: 'Top',
        component: TopPage
      },
      {
        path: '/chat',
        name: 'Chat',
        component: UserChat
      },

    ]
  },
  // {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
