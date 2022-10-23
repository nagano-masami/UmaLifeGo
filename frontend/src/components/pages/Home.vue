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
  },
  methods : {
      createTitleDesc : function(routeInstance){
        //titleを設定する処理
        if(routeInstance.meta.title){
            var setTitle = routeInstance.meta.title + 'Stock Derby';
            document.title = setTitle;
        } else {
            document.title = setTitle
        }
      }
    }
};
</script>
