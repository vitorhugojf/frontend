import Vue from "vue";
import globalDirectives from "./globalDirectives";
import globalMixins from "./globalMixins";
import globalComponents from "./globalComponents";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import VueLazyload from "vue-lazyload";

import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/now-ui-kit.scss";
import "@/assets/demo/demo.css";

locale.use(lang);

Vue.use(globalDirectives);
Vue.use(globalMixins);
Vue.use(globalComponents);
Vue.use(VueLazyload, {
  observer: true,
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1
  }
});
