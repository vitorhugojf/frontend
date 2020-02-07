import httpClient from "../../core/http-client";
import router from "../../router";
import vue from "vue";

const accountHttpService = httpClient("auth");

export default {
  state: { token: localStorage.getItem("token") },
  getters: {
    isAuthenticated(state) {
      return state.token ? true : false;
    }
  },
  mutations: {
    auth_login(state, signInForm) {
      accountHttpService.post("login", signInForm).then(data => {
        localStorage.setItem("token", data.data.token);
        state.token = data.data.token;
        router.push("profile");
        vue.$toast.success(`Bem vindo !`);
      });
    },
    auth_logout(state) {
      localStorage.removeItem("token");
      state.token = null;
    }
  },
  actions: {
    auth_login({ commit }, signInForm) {
      commit("auth_login", signInForm);
    },
    auth_logout({ commit }) {
      commit("auth_logout");
    }
  }
};
