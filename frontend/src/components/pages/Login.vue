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
          <v-icon large>mdi-file-document-multiple-outline</v-icon>Uma Life Go
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-card
            class="elevation-12"
            :loading="loading"
            >
            <template slot="progress">
              <v-overlay absolute>
                <div class="text-center py-12">
                  <div class="headline">Now Loading...</div>
                  <v-progress-circular :size="56" width="8" color="primary" indeterminate></v-progress-circular>
                </div>
              </v-overlay>
            </template>
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="ID"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="id"
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
              <v-row>
                <v-col>
                  <div align="center">
                    <v-btn color="#B2EBF2" @click="login" :disabled="loading" v-text="loadLabel"></v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
//v-bindを「:」v-onを「@」v-slotを「#」で省略して記述することができます。
export default {
  name: "login-system",
  components: {},
  data: () => ({
    showPassword: false,
    id: "",
    password: "",
    loading: false,
    loadLabel: "LOGIN"
  }),
  methods: {
    login() {
      // 入力されたログイン情報が正しいか確認
      this.$store.dispatch("login", {
        id: this.id,
        password: this.password
      }),
      //loadingの設定
      this.loading = true,
      this.loadLabel = "Now Loading",
      setTimeout(() => {
        this.loading = false,
        this.loadLabel = "LOGIN"
      },5000)
    },
  },
};
</script>
