import httpClient from "../../core/http-client";
import router from "../../router";
import vue from "vue";

const userHttpService = httpClient("user");

export default {
  state: {
    signUpForm: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  },
  getters: {},
  mutations: {
    register(state) {
      userHttpService.post("register", state.signUpForm).then(data => {
        localStorage.setItem("token", token);
        state.auth.token = token;
        router.push("profile");
        vue.$toast.success(`Bem vindo !`);
      });
    },
    clear_form(state) {
      state.signUpForm.email = "";
      state.signUpForm.password = "";
      state.signUpForm.confirmPassword = "";
    }
  },
  actions: {
    register({ commit }) {
      commit("register");
    },
    clear_form({ commit }) {
      commit("clear_form");
    }
  }
};
