import Vue from "vue";
import Router from "vue-router";

import AppHeader from "../layout/AppHeader.vue";
import AppFooter from "../layout/AppFooter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/home",
      name: "home",
      components: { header: AppHeader, default: () => import(/* webpackChunkName: "Home" */ "../pages/Home.vue"), footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { header: AppHeader, default: () => import(/* webpackChunkName: "Landing" */ "../pages/Landing.vue"), footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { header: AppHeader, default: () => import(/* webpackChunkName: "Login" */ "../pages/Login.vue"), footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { header: AppHeader, default: () => import(/* webpackChunkName: "Profile" */ "../pages/Profile.vue"), footer: AppFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "*",
      redirect: "home"
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
