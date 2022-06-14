<template>
  <div>
    <menu-bar />
    <v-main>
      <user-chat />
    </v-main>
  </div>
</template>

<script>
import UserChat from "../parts/UserChat.vue";
import MenuBar from "../globals/MenuBar.vue";

export default {
  name: "ChatHome",
  components: {
    UserChat,
    MenuBar
  },
};
</script>
