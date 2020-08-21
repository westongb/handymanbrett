import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import {uriBase} from "../const";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Services",
    name: "Services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Services.vue")
  },
  {
    path: "/meetBrett",
    name: "MeetBrett",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Brett.vue")
  },
  {
    path: "/quote",
    name: "Get Quote",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GetQuotePage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: uriBase,
  routes
});

export default router;