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
  methods: {
    createTitleDesc : function(routeInstance){
      //titleを設定する処理
      if(routeInstance.meta.title){
        var setTitle = routeInstance.meta.title + 'Stock Derby';
        document.title = setTitle;
      }else{
        document.title = 'Stock Derby subtitle'
      }
      //メタタグのdescription設定処理
      if(routeInstance.meta.desc){
        var setDesc = routeInstance.meta.desc + '競馬の家計簿';
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      }else{
        document.querySelector("meta[name='description']").setAttribute('content', 'subdescription')
      }
    }
  },
  mounted : function(){
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  watch: {
    '$route' (routeInstance) {
      this.createTitleDesc(routeInstance);
    }
  }
};
</script>
