<template>
  <div class="page-header clear-filter" filter-color="black">
    <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
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
              <a  class="btn btn-primary btn-round btn-lg btn-block" @click="signIn()">Sign In</a>
            </div>
            <div class="pull-left">
              <h6>
                <a class="link footer-link" type="primary" @click="signUp = true">Sign Up</a>
              </h6>
            </div>
            <div class="pull-right">
              <h6>
                <router-link to="landing" class="link footer-link">Need Help?</router-link>
              </h6>
            </div>
          </card>
        </div>
      </div>
    </div>
    <modal :show.sync="signUp" headerClasses="justify-content-center" class="modal-primary">
      <h4 slot="header" class="card-title title-up">Sign Up</h4>
      <div class="social-line text-center">
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
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons text_caps-small"
        placeholder="Senha..."
      ></fg-input>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons text_caps-small"
        placeholder="Senha..."
      ></fg-input>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons text_caps-small"
        placeholder="Senha..."
      ></fg-input>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons text_caps-small"
        type="password"
        placeholder="Senha..."
      ></fg-input>
      <fg-input
        class="no-border input-lg"
        addon-left-icon="now-ui-icons text_caps-small"
        type="password"
        placeholder="Senha..."
      ></fg-input>

      <template slot="footer">
        <n-button class="btn btn-danger btn-round btn-lg btn-block" @click="signUp = false">Close</n-button>
        <n-button class="btn btn-success btn-round btn-lg btn-block" @click="register()">Sign Up</n-button>
      </template>
    </modal>
  </div>
</template>
<script>
import { Card, Modal, Button, FormGroupInput } from "@/components";
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
  methods: {
    signIn() {
      this.$router.push("profile");
    },
    register() {
      var form = this.$store.state.register.signUpForm;
      this.$router.push("profile");
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
