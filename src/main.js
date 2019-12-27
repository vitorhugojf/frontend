import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import toastification from "./plugins/toastification";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  toastification,
  render: h => h(App)
}).$mount("#app");
