<template>
  <div
    class="section section-signup"
    style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;"
  >
    <div class="container">
      <div class="row">
        <card class="card-signup" header-classes="text-center" color="black">
          <template slot="header">
            <h3 class="card-title title-up">Sign Up</h3>
            <div class="social-line">
              <a href="#pablo" class="btn btn-neutral btn-facebook btn-icon btn-round">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-twitter btn-icon btn-lg btn-round">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#pablo" class="btn btn-neutral btn-google btn-icon btn-round">
                <i class="fab fa-google-plus"></i>
              </a>
            </div>
          </template>

          <template>
            <fg-input
              class="no-border"
              placeholder="Nome..."
              v-model="$store.state.register.signUpForm.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            ></fg-input>
            <fg-input
              class="no-border"
              placeholder="Sobrenome..."
              v-model="$store.state.register.signUpForm.lastName"
              addon-left-icon="now-ui-icons text_caps-small"
            ></fg-input>

            <fg-input
              class="no-border"
              placeholder="Email..."
              v-model="$store.state.register.signUpForm.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            ></fg-input>

            <fg-input
              class="no-border"
              placeholder="Senha..."
              type="password"
              v-model="$store.state.register.signUpForm.password"
              addon-left-icon="now-ui-icons objects_key-25"
            ></fg-input>

            <fg-input
              class="no-border"
              type="password"
              placeholder="Confirme sua senha..."
              v-model="$store.state.register.signUpForm.confirmPassword"
              addon-left-icon="now-ui-icons objects_key-25"
            ></fg-input>
          </template>
          <div class="card-footer text-center">
            <n-button type="neutral" round size="lg">Get Started</n-button>
          </div>
        </card>
      </div>
      <div class="col text-center">
        <router-link to="/login" class="btn btn-simple btn-round btn-white btn-lg">View Login Page</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, FormGroupInput, Button } from "@/components";

export default {
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>