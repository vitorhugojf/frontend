<template>
  <div class="page-header clear-filter" filter-color="black">
    <div class="page-header-image" style="background-image: url('assets/background/bg13.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card v-show="!signUp" type="login" plain>
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
            <form @submit.prevent="signIn">
              <h6 class="card-title title-up text-center">&nbsp;</h6>
              <fg-input
                class="no-border input-lg"
                :class=" $v.signInForm.email.$invalid ? 'has-danger' : 'has-success' "
                addon-left-icon="now-ui-icons users_circle-08"
                v-model="signInForm.email"
                placeholder="Email..."
              ></fg-input>
              <fg-input
                class="no-border input-lg"
                :class=" $v.signInForm.password.$invalid ? 'has-danger' : 'has-success' "
                addon-left-icon="now-ui-icons text_caps-small"
                type="password"
                v-model="signInForm.password"
                placeholder="Senha..."
              ></fg-input>

              <div class="card-footer text-center">
                <a class="btn btn-primary btn-round btn-lg btn-block" @click="signIn()">Entrar</a>
              </div>
            </form>
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
          <card v-show="signUp" type="register" plain>
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
              <h6 class="card-title title-up text-center">ou faça seu registro localmente</h6>
              <fg-input
                class="no-border input-lg"
                :class=" $v.$store.state.register.signUpForm.email.$invalid ? 'has-danger' : 'has-success' "
                addon-left-icon="now-ui-icons users_circle-08"
                v-model.trim="$store.state.register.signUpForm.email"
                placeholder="Email..."
              ></fg-input>
              <fg-input
                class="no-border input-lg"
                :class=" $v.$store.state.register.signUpForm.password.$invalid ? 'has-danger' : 'has-success' "
                addon-left-icon="now-ui-icons text_caps-small"
                v-model.trim="$store.state.register.signUpForm.password"
                type="password"
                placeholder="Senha..."
              ></fg-input>
              {{ $v.$store.state.register.signUpForm.password.invalid
              }}
              <fg-input
                class="no-border input-lg"
                :class=" $v.$store.state.register.signUpForm.confirmPassword.$invalid ? 'has-danger' : 'has-success' "
                addon-left-icon="now-ui-icons text_caps-small"
                v-model.trim="$store.state.register.signUpForm.confirmPassword"
                type="password"
                placeholder="Confirme sua senha..."
              ></fg-input>
              <div class="card-footer text-center">
                <button
                  class="btn btn-primary btn-round btn-lg btn-block"
                  :disabled="this.$v.$invalid"
                  @click="confirmRegister()"
                >Registrar</button>
              </div>
            </form>
            <div class="pull-left">
              <h6>
                <a class="link footer-link" type="primary" @click="cancelRegister()">Cancelar</a>
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
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data: () => ({
    signInForm: {
      email: "",
      password: ""
    },
    signUp: false
  }),
  validations: {
    $store: {
      state: {
        register: {
          signUpForm: {
            email: { required, email },
            password: { required, minLength: minLength(8) },
            confirmPassword: { required, sameAsPassword: sameAs("password") }
          }
        }
      }
    },
    signInForm: {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("auth_login", this.signInForm);
    },
    cancelRegister() {
      this.$store.dispatch("clear_form");
      this.signUp = false;
    },
    confirmRegister() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch("register");
      }
    },
    clearForm() {}
  }
};
</script>