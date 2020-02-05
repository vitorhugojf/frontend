<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/index">Frontend</router-link>
    </template>
    <template slot="navbar-menu" v-if="loggedIn">
      <li class="nav-item" v-for="(item, index) in loggedInLinks" :key="index">
        <router-link :to="item.path" class="nav-link">{{item.title}}</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="logout()">Sair</a>
      </li>
    </template>

    <template slot="navbar-menu" v-else>
      <li class="nav-item" v-for="(item, index) in loggedOutLinks" :key="index">
        <router-link :to="item.path" class="nav-link">{{item.title}}</router-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  computed: {
    loggedIn() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth_logout").then(() => {
        this.$router.push("home");
      });
    }
  },
  data: () => ({
    loggedInLinks: [
      {
        title: "Home",
        path: "/home",
        icon: "now-ui-icons arrows-1_minimal-right"
      },
      {
        title: "Landing",
        path: "/landing",
        icon: "now-ui-icons arrows-1_minimal-right",
        onlyAdmin: false
      },
      {
        title: "Profile",
        path: "/profile",
        icon: "now-ui-icons arrows-1_minimal-right",
        onlyAdmin: false
      }
    ],
    loggedOutLinks: [
      {
        title: "Home",
        path: "/home",
        icon: "now-ui-icons arrows-1_minimal-right"
      },
      {
        title: "Landing",
        path: "/landing",
        icon: "now-ui-icons arrows-1_minimal-right"
      },
      {
        title: "Login",
        path: "/login",
        icon: "now-ui-icons arrows-1_minimal-right"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
</style>
