export default {
  state: {
    signUpForm: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: ""
    }
  },
  getters: {},
  mutations: {
    clear_form(state) {
      state.signUpForm.firstName = "";
      state.signUpForm.lastName = "";
      state.signUpForm.email = "";
      state.signUpForm.confirmEmail = "";
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
