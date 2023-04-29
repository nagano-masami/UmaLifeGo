<template>

<v-card elevation="0">
<!--     <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        過去記録
      </h1>
    </v-card-title> -->

    <default-bar :defaultBar="defaultBar" @update-default-bar="updateDefaultBar"/>

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
      <v-btn-toggle style="color: var(--main-color)" group>
        <v-btn @click="loadRaceInfo">
          読込
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn @click="toInput">
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
            <history-card :historyCard="allHistoryCard" @update-history-card="loadRaceInfo"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="boxHistoryCard" @update-history-card="loadRaceInfo"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="formationHistoryCard" @update-history-card="loadRaceInfo"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="normalHistoryCard" @update-history-card="loadRaceInfo"/>
          </v-row>
        </v-containar>
      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
import DefaultBar from "../globals/DefaultBar.vue";
import HistoryCard from '../globals/HistoryCard.vue';
import io from "socket.io-client";
import axios from "axios";

export default {
    name: "History",
    data () {
      return {
        tab: null,
        socket: "",
        defaultBar: {
          selectDate:null,
          selectPlace: null,
          selectRace_no: null
        },

        allHistoryCard: [],

        boxHistoryCard: [],
        formationHistoryCard: [],

        normalHistoryCard: []

      }
    },
  methods: {
    
      // Historyの読込処理
      async loadRaceInfo() {

        if (this.defaultBar.selectDate && this.defaultBar.selectPlace && this.defaultBar.selectRace_no) {
            const param = {
              defaultBar: this.defaultBar,
              
            };


            try {
            let result = await axios.post("http://localhost:3000/getRaceInfo",param);
            if (result.data) {
              // 履歴の取得に成功した場合
              this.raceInfoDistinguish(result.data);
            } else {
              // 履歴の取得に失敗した場合
              console.log("履歴の表示に失敗しました。");
            }
          } catch {
            alert("処理に失敗しました。");
          }
        } else {
          // 初期表示時にDBのレコードを取得する
          try {
            let result = await axios.post("http://localhost:3000/getInitInfo");
            if (result.data !== "NG") {
              // 履歴の取得に成功した場合
              this.raceInfoDistinguish(result.data);
            } else {
              // 履歴の取得に失敗した場合
              console.log("履歴の表示に失敗しました。");
            }
          } catch {
            alert("処理に失敗しました。");
          }

        }

          
      },

      // 新しいCardの追加処理
      toInput() {
        this.$router.push('/input')
      },

      // 既存のカードの編集処理

      // 既存のカードの削除処理

      //historyから読み込んだ情報を通常、フォーメーション、ボックス、ALLに振り分けて表示する処理
      raceInfoDistinguish(raceInfos) {

        this.allHistoryCard = raceInfos;
        let boxRaceInfos = [];
        let formationRaceInfos = [];
        let normalRaceInfos = [];

        
          for (let raceInfo of raceInfos) {
            if (raceInfo.ticket_selection_j_name == "ボックス") {

              boxRaceInfos.push(raceInfo);

            } else if(raceInfo.ticket_selection_j_name == "フォーメーション"){

              formationRaceInfos.push(raceInfo);

            } else if (raceInfo.ticket_selection_j_name == "通常") {

              normalRaceInfos.push(raceInfo);

            }
          }

        this.boxHistoryCard = boxRaceInfos;
        this.formationHistoryCard = formationRaceInfos;
        this.normalHistoryCard = normalRaceInfos;
    },
    
      updateDefaultBar(defaultBar) {
      this.defaultBar = defaultBar;
    },
  },

  async mounted() {
        
          this.socket = io("localhost:3000");

          
          this.loadRaceInfo();
         
  }, 
    
    components: {
        DefaultBar,
        HistoryCard,
    }
  }
</script>
