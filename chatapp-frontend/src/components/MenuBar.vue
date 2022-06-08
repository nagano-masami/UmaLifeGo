<template>
  <v-app-bar app color="primary" dark>
    <v-spacer></v-spacer>
    <v-btn @click="logout">
      <span class="mr-2">Logout</span>
      <v-icon>mdi-home-export-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "MenuBar",
  components: {},
  methods: {
    logout() {
      // ログアウト処理実施
      this.$store.dispatch("logout");
    },
  },
};
</script>