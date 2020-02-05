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
    <template slot="navbar-menu">
      <!-- <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <i class="now-ui-icons arrows-1_cloud-download-93"></i>
          <p>Download</p>
        </a>
      </li>-->
      <drop-down tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
        <a
          href="https://demos.creative-tim.com/vue-now-ui-kit/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <drop-down tag="li" title="Páginas" class="nav-item">
        <div v-if="loggedIn">
          <nav-link v-for="(item, index) in loggedInLinks" :key="index" :to="item.path">
            <i :class="item.icon"></i>
            {{item.title}}
          </nav-link>

          <a class="dropdown-item" @click="logout()">
            <i class="now-ui-icons ui-1_simple-remove"></i> Sair
          </a>
        </div>
        <div v-else>
          <nav-link v-for="(item, index) in loggedOutLinks" :key="index" :to="item.path">
            <i :class="item.icon"></i>
            {{item.title}}
          </nav-link>
        </div>
      </drop-down>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
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
      return false;
    }
  },
  methods: {
    logout() {
      debugger;
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
