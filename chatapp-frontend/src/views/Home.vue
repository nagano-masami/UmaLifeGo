<template>
  <div>
      <menu-bar />
  <v-main>
    <chat />
  </v-main>
  </div>
</template>

<script>
import Chat from "@/components/Chat.vue";
import MenuBar from "@/components/MenuBar.vue";

export default {
  name: "ChatHome",
  components: {
    Chat,
    MenuBar
  },
};
</script>
