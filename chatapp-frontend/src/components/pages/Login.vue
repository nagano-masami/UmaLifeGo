<template>
  <div class="login">
    <v-container class="fill-height" fluid>
      <!-- v-rowのalignとjustify https://vuetifyjs.com/ja/components/grids/#playground -->
      <v-row
        align="center"
        justify="center"
        class="headline font-italic font-weight-medium text--secondary"
      >
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-icon large>mdi-chat-processing-outline</v-icon>ChatApp
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="UserId"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="userId"
                ></v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  @keyup.enter="login"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-row align="center" justify="space-around">
                <v-btn color="#B2EBF2" @click="login">Login</v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    showPassword: false,
    userId: "",
    password: "",
  }),
  methods: {
    login() {
      // 入力されたログイン情報が正しいか確認
      this.$store.dispatch("login", {
        userId: this.userId,
        password: this.password,
      });
    },
  },
};
</script>
