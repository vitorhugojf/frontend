import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

import AppHeader from "../layout/AppHeader.vue";
import AppFooter from "../layout/AppFooter.vue";

Vue.use(Router);

const routes = [
  {
    path: "/home",
    name: "home",
    components: {
      header: AppHeader,
      default: () => import(/* webpackChunkName: "Home" */ "../pages/Home.vue"),
      footer: AppFooter
    },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" }
    }
  },
  {
    path: "/landing",
    name: "landing",
    components: {
      header: AppHeader,
      default: () =>
        import(/* webpackChunkName: "Landing" */ "../pages/Landing.vue"),
      footer: AppFooter
    },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" }
    }
  },
  {
    path: "/login",
    name: "login",
    components: {
      header: AppHeader,
      default: () =>
        import(/* webpackChunkName: "Login" */ "../pages/Login.vue"),
      footer: AppFooter
    },
    props: {
      header: { colorOnScroll: 400 }
    },
    meta: { guestOnly: true }
  },
  {
    path: "/profile",
    name: "profile",
    components: {
      header: AppHeader,
      default: () =>
        import(/* webpackChunkName: "Profile" */ "../pages/Profile.vue"),
      footer: AppFooter
    },
    props: {
      header: { colorOnScroll: 400 },
      footer: { backgroundColor: "black" }
    },
    meta: { requireAuth: true }
  },
  {
    path: "*",
    redirect: "home"
  }
];

const router = new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth);
  const guestOnly = to.matched.some(record => record.meta.guestOnly);
  const loggedIn = store.getters.isAuthenticated;

  requireAuthRoutes(requireAuth, loggedIn, next);
  guestOnlyRoutes(guestOnly, loggedIn, next);
});

function requireAuthRoutes(requireAuth, loggedIn, next) {
  if (requireAuth && !loggedIn) next("home");
  else next();
}

function guestOnlyRoutes(guestOnly, loggedIn, next) {
  if (guestOnly && loggedIn) next("profile");
  else next();
}

export default router;
