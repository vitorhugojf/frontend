import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VideoBg from 'vue-videobg'

import "./plugins";

Vue.config.productionTip = false;

Vue.component('video-bg', VideoBg)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
