<template>
  <div>
    <menu-bar />
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
import MenuBar from "../globals/MenuBar.vue";

export default {
  name: "Home",
  components: {
    MenuBar
  }
};
</script>
