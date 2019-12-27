<template>
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-title>Register</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field id="email" label="Email" name="login" type="text"></v-text-field>
                <v-text-field id="password" label="Password" name="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    //
  })
};
</script>
