<template>

<v-card>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        過去記録
      </h1>
    </v-card-title>

    <default-bar/>

    <v-toolbar elevation="0">
      <v-spacer></v-spacer>
      <v-text-field
        label="投資額"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
        value="123456789"
        readonly
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field
        label="収支"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2"
        value="123456789"
        readonly
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn-toggle color="primary" group>
        <v-btn>
          読込
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn>
          追加
          <v-icon>mdi-content-save-plus</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

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

      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card />
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card />
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card />
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card />
          </v-row>
        </v-containar>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import DefaultBar from "../globals/DefaultBar.vue";
import HistoryCard from '../globals/HistoryCard.vue';

export default {
    name: "History",
    data () {
      return {
        tab: null,
      }
    },
    methods: {
      // Historyの読込処理

      // 新しいCardの追加処理

      // 既存のカードの編集処理

      // 既存のカードの削除処理
    },
    components: {
        DefaultBar,
        HistoryCard,
    }
  }
</script>
