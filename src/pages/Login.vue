<template>
  <div class="page-header clear-filter" filter-color="orange">
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
              placeholder="Senha..."
            ></fg-input>

            <div class="card-footer text-center">
              <router-link to="profile" class="btn btn-primary btn-round btn-lg btn-block">Sign In</router-link>
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
    <modal :show.sync="signUp" headerClasses="justify-content-center">
      <h4 slot="header" class="title title-up">Modal title</h4>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean. A small river named Duden flows by their place and supplies it
        with the necessary regelialia. It is a paradisematic country, in which
        roasted parts of sentences fly into your mouth.
      </p>
      <template slot="footer">
        <n-button type="danger" @click="signUp = false">Close</n-button>
        <n-button @click="register()">Sign Up</n-button>
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

.modal {
  color: black;
}
</style>
