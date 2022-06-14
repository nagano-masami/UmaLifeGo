<template>
  <div>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>CP_TOOL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <!--v-btn>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn @click="logout">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-home-export-outline</v-icon>
      </v-btn-->
      <v-menu left bottom>
        <template v-slot:activator="{on,attrs}">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <!-- v-list-item v-for="n in 5" :key="n" @click="() => {}"-->
          <v-list-item>
            <v-list-item-title @click="logout">
              <v-icon>mdi-home-export-outline</v-icon>
              Logout
            </v-list-item-title>
            <!--v-list-item-title>O</v-list-item-title>
            <v-list-item-title>O</v-list-item-title>
            <v-list-item-title>O</v-list-item-title-->
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import UserChat from "../parts/UserChat.vue";

export default {
  name: "MenuBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    UserChat,
  },
  methods: {
    logout() {
      // ログアウト処理実施
      this.$store.dispatch("logout");
    },
  },
};
</script>