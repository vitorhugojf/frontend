<template>
  <div class="page-header clear-filter" filter-color="black">
    <div class="page-header-image" style="background-image: url('img/bg3.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email..."
            ></fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              type="password"
              placeholder="Senha..."
            ></fg-input>

            <div class="card-footer text-center">
              <a class="btn btn-primary btn-round btn-lg btn-block" @click="signIn()">Entrar</a>
            </div>
            <div class="pull-left">
              <h6>
                <a class="link footer-link" type="primary" @click="signUp = true">Se Registre</a>
              </h6>
            </div>
            <div class="pull-right">
              <h6>
                <router-link to="landing" class="link footer-link">Precisa de Ajuda?</router-link>
              </h6>
            </div>
          </card>
        </div>
      </div>
    </div>
    <modal :show.sync="signUp" headerClasses="justify-content-center" class="modal-black">
      <h4 slot="header" class="card-title title-up">Se Registre</h4>
      <div class="social-line text-center">
        <a href class="btn btn-neutral btn-linkedin btn-icon btn-round">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href class="btn btn-neutral btn-google btn-lg btn-icon btn-round">
          <i class="fab fa-google-plus"></i>
        </a>
        <a href class="btn btn-neutral btn-icon btn-round">
          <i class="fab fa-windows"></i>
        </a>
      </div>
      <form @submit.prevent="confirmRegister">
        <fg-input
          class="no-border input-lg form-group"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.firstName.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.firstName"
          placeholder="Nome..."
        ></fg-input>
        <fg-input
          class="no-border input-lg"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.lastName.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.lastName"
          placeholder="Sobrenome..."
        ></fg-input>
        <fg-input
          class="no-border input-lg"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.email.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.email"
          placeholder="Email..."
        ></fg-input>
        <fg-input
          class="no-border input-lg"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.confirmEmail.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.confirmEmail"
          placeholder="Confirme seu email..."
        ></fg-input>
        <fg-input
          class="no-border input-lg"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.password.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.password"
          type="password"
          placeholder="Senha..."
        ></fg-input>
        <fg-input
          class="no-border input-lg"
          :class="{ 'form-group--error': $v.$store.state.register.signUpForm.confirmPassword.$error }"
          addon-left-icon="now-ui-icons text_caps-small"
          v-model.trim="$store.state.register.signUpForm.confirmPassword"
          type="password"
          placeholder="Confirme sua senha..."
        ></fg-input>
      </form>

      <template slot="footer">
        <n-button
          class="btn btn-danger btn-round btn-lg btn-block"
          @click="cancelRegister()"
        >Cancelar</n-button>
        <button
          class="btn btn-success btn-round btn-lg btn-block"
          @click="confirmRegister()"
          :disabled="this.$v.$invalid"
        >Confirmar</button>
      </template>
    </modal>
  </div>
</template>
<script>
import { Card, Modal, Button, FormGroupInput } from "@/components";
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    Modal,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data: () => ({
    signUp: false
  }),
  validations: {
    $store: {
      state: {
        register: {
          signUpForm: {
            firstName: { required },
            lastName: { required },
            email: { required, email },
            confirmEmail: { required, sameAsEmail: sameAs("email") },
            password: { required, minLength: 8 },
            confirmPassword: { required, sameAsPassword: sameAs("password") }
          }
        }
      }
    }
  },
  methods: {
    signIn() {
      this.$router.push("profile");
    },
    cancelRegister() {
      this.clearForm();
      this.signUp = false;
    },
    confirmRegister() {
      this.$v.$touch();
      if (this.$v.$valid) {
        var form = this.$store.state.register.signUpForm;
        this.clearForm();
        this.$router.push("profile");
      }
    },
    clearForm() {
      this.$store.state.register.signUpForm.firstName = "";
      this.$store.state.register.signUpForm.lastName = "";
      this.$store.state.register.signUpForm.email = "";
      this.$store.state.register.signUpForm.confirmEmail = "";
      this.$store.state.register.signUpForm.password = "";
      this.$store.state.register.signUpForm.confirmPassword = "";
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  cursor: pointer;
}

.card-footer {
  margin-top: 20px;
}
</style>
