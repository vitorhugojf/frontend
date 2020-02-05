import httpClient from "../../core/http-client";

const accountHttpService = httpClient("Account");

export default {
  state: { token: localStorage.getItem("token") },
  getters: {
    isAuthenticated(state) {
      return state.token ? true : false;
    }
  },
  mutations: {
    auth_login(state, payload) {
      localStorage.setItem("token", "teste");
      state.token = payload;
    },
    auth_logout(state) {
      localStorage.removeItem("token");
      state.token = null;
    }
  },
  actions: {
    async auth_login({ commit }, payload) {
      commit("auth_login", "teste");
      //   await accountHttpService.post("Login", payload).then(data => {
      //     commit('auth_login', data.data.token)
      //     localStorage.setItem("token", data.data.token);
      //   });
    },
    auth_logout({ commit }) {
      commit("auth_logout");
    }
  }
};
