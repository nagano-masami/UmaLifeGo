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
    //routerにセットしたmetaプロパティへのアクセス方法
    //ルートインスタンス.meta.設定した変数名
    //routeInstanceとは$routeを代入した変数
    createTitleDesc : function(routeInstance){
      //titleを設定する処理
      if(routeInstance.meta.title){
        var setTitle = routeInstance.meta.title + ' Uma Life Go';
        document.title = setTitle;
      }else{
        document.title = 'Uma Life Go'
      }
      //メタタグのdescription設定処理
      if(routeInstance.meta.desc){
        var setDesc = routeInstance.meta.desc + ' 競馬の家計簿';
        //descriptionはmetaタグのname属性、値はcontent属性
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      }else{
        document.querySelector("meta[name='description']").setAttribute('content', '競馬の家計簿')
      }
    }
  },
  //mountedはページの読み込みが開始したときに、非常に早い段階で実行される処理
  //コンポーネントやDOMより早い
  mounted : function(){
    var routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  //変更内容を自動反映
  watch: {
    '$route' (routeInstance) {
      this.createTitleDesc(routeInstance);
    }
  }
};
</script>
