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
    clear_form(state) {
      state.signUpForm.email = "";
      state.signUpForm.password = "";
      state.signUpForm.confirmPassword = "";
    }
  },
  actions: {
    clear_form({ commit }) {
      commit("clear_form");
    }
  }
};
