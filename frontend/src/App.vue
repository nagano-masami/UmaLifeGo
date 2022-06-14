<template>
  <v-app>
    <login v-if="!isLogin"></login>
    <home v-else />
  </v-app>
</template>

<script>
import Login from "@/components/pages/Login.vue";
import Home from "@/components/pages/Home.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Login,
    Home,
  },
  computed: {
    /* 
    スプレッド演算子を使うことで以下と同じコードになる。
    mapState({
      isLogin: this.$store.state.isLogin,
    })
    */
    ...mapState(["isLogin"]),
  },
};
</script>
