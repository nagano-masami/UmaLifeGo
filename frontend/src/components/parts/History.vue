<template>

<v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        過去記録
      </h1>
    </v-card-title>

    <default-bar/>

    <v-tabs
      v-model="tab"
      color="#238842"
      grow
    >
      <v-tab> ALL </v-tab>
      <v-tab> ボックス </v-tab>
      <v-tab> フォーメーション </v-tab>
      <v-tab> 通常 </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

    </v-tabs-items>
  </v-card>
</template>

<script>
import DefaultBar from "../globals/DefaultBar.vue";

export default {
    name: "History",
    data () {
      return {
      }
    },
    components: {
      DefaultBar,
    }
  }
</script>
