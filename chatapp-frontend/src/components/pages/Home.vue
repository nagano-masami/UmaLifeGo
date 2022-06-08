<template>
  <div>
      <menu-bar />
  <v-main>
    <chat />
  </v-main>
  </div>
</template>

<script>
import Chat from "../parts/Chat.vue";
import MenuBar from "../globals/MenuBar.vue";

export default {
  name: "ChatHome",
  components: {
    Chat,
    MenuBar
  },
};
</script>
