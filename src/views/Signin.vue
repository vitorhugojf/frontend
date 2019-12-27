<template>
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-title>Login</v-card-title>
            <v-card-text>
              Choose one of the following methods
              <v-card-actions class="justify-center">
                <v-btn>
                  <v-icon right dark>mdi-facebook</v-icon>facebook
                </v-btn>
                <v-btn>
                  <v-icon right dark>mdi-google</v-icon>google
                </v-btn>
                <v-btn>
                  <v-icon right dark>mdi-microsoft</v-icon>microsoft
                </v-btn>
              </v-card-actions>
              <br />
              <br />
              <v-form>
                Or Signin using your Email Address
                <v-text-field id="email" label="Email" name="login" type="text"></v-text-field>
                <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success">Login</v-btn>
            </v-card-actions>
          </v-card>
          <br />
          <div class="text-center">
            <span>
              Don't have a account? So
              <a href="/signup">Create</a>!
            </span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Signin",
  data: () => ({
    //
  })
};
</script>
