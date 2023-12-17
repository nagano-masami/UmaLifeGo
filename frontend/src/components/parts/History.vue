<template>
  <v-card elevation="0">
    <!--     <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold">
        過去記録
      </h1>
    </v-card-title> -->

    <default-bar :defaultBar="defaultBar" @update-default-bar="updateDefaultBar" />

    <v-toolbar elevation="0">
      <v-spacer></v-spacer>
      <v-text-field label="合計投資額" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1" v-model="InvestmentAmount" readonly></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field label="合計収支" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2" v-model="balance" readonly></v-text-field>
      <v-spacer></v-spacer>
      <v-btn-toggle style="color: var(--main-color)" group>
        <v-btn @click="load">
          読込
          <v-icon>mdi-reload</v-icon>
        </v-btn>
        <v-btn @click="toInput">
          追加
          <v-icon>mdi-content-save-plus</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-tabs v-model="tab" color="#238842" grow>
      <v-tab> ALL </v-tab>
      <v-tab> ボックス </v-tab>
      <v-tab> フォーメーション </v-tab>
      <v-tab> 通常 </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="allHistoryCard" @update-history-card="loadRaceInfo" @editClickAction="saveRaceInfoInStore"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="boxHistoryCard" @update-history-card="loadRaceInfo" @editClickAction="saveRaceInfoInStore"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="formationHistoryCard" @update-history-card="loadRaceInfo" @editClickAction="saveRaceInfoInStore"/>
          </v-row>
        </v-containar>
      </v-tab-item>
      <v-tab-item>
        <v-containar>
          <v-row justify="center">
            <history-card :historyCard="normalHistoryCard" @update-history-card="loadRaceInfo" @editClickAction="saveRaceInfoInStore"/>
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
  data() {
    return {
      tab: null,
      socket: "",
      show1: false,
      show2:false,
      defaultBar: {
        selectDate: null,
        selectPlace: null,
        selectRace_no: null
      },

      allHistoryCard: [],

      boxHistoryCard: [],
      formationHistoryCard: [],

      normalHistoryCard: [],
      InvestmentAmount: null,
      balance: null,

    }
  },
  methods: {
    // 読み込み
    async load() {

      if (this.defaultBar.selectDate && this.defaultBar.selectPlace && this.defaultBar.selectRace_no) {
        const param = {
          defaultBar: this.defaultBar,
          id: this.$store.state.id
        };

        try {
          let result = await axios.post("http://UmaLifeGo-ALB-2064613329.ap-northeast-1.elb.amazonaws.com:3000/getRaceInfos", param);
          if (result.data !== "NG") {
            // historyの取得に成功した場合
            this.raceInfoDistinguish(result.data);
          } else {
            // historyの取得に失敗した場合
            console.log("historyのデータ取得に失敗しました。");
            alert("historyのデータ取得に失敗しました。");
          }
        } catch {
          alert("処理に失敗しました。");
        }
      } else {
        alert("入力内容が不足しています。");
      }
    },

    // Historyの読込処理(初期表示の読み込みと条件ありの読み込み)
    async loadRaceInfo() {

      if (this.defaultBar.selectDate && this.defaultBar.selectPlace && this.defaultBar.selectRace_no) {
        const param = {
          defaultBar: this.defaultBar,
          id: this.$store.state.id
        };

        try {
          let result = await axios.post("http://UmaLifeGo-ALB-2064613329.ap-northeast-1.elb.amazonaws.com:3000/getRaceInfos", param);
          let resultData = result.data;
          console.log(resultData);
          if (resultData !== "NG") {
            // historyの取得に成功した場合
            this.raceInfoDistinguish(resultData);
          } else {
            // historyの取得に失敗した場合
            console.log("historyのデータ取得に失敗しました。");
            alert("historyのデータ取得に失敗しました。");
          }
        } catch {
          alert("処理に失敗しました。");
        }
      } else {
        // 初期表示時にDBのレコードを取得する
        try {

          const param = {
            id: this.$store.state.id
          };
          let result = await axios.post("http://UmaLifeGo-ALB-2064613329.ap-northeast-1.elb.amazonaws.com:3000/getInitInfo", param);
          let resultData = result.data;
          if (resultData !== "NG") {
            // 履歴の取得に成功した場合
            this.raceInfoDistinguish(resultData);
          } else {
            // 履歴の取得に失敗した場合
            console.log("historyの初期表示データの取得に失敗しました。");
            alert("historyの初期表示データの取得に失敗しました。");
          }
        } catch {
          alert("初期表示の取得処理に失敗しました。");
        }

      }


    },

    // 新しいCardの追加処理
    toInput() {
      this.$router.push('/input');
    },

    // 既存のカードの編集処理

    //historyから読み込んだ情報を通常、フォーメーション、ボックス、ALLに振り分けて表示する処理
    raceInfoDistinguish(raceInfos) {

      this.allHistoryCard = raceInfos;
      let boxRaceInfos = [];
      let formationRaceInfos = [];
      let normalRaceInfos = [];
      let InvestmentAmount = 0;
      let balance= 0;


      for (let raceInfo of raceInfos) {

        InvestmentAmount += raceInfo.purchase_total_amount;
        balance += raceInfo.refund_amount;
        if (raceInfo.ticket_category_name == "ボックス") {

          boxRaceInfos.push(raceInfo);

        } else if (raceInfo.ticket_category_name == "フォーメーション") {

          formationRaceInfos.push(raceInfo);

        } else if (raceInfo.ticket_category_name == "通常") {

          normalRaceInfos.push(raceInfo);

        }
      }

      this.boxHistoryCard = boxRaceInfos;
      this.formationHistoryCard = formationRaceInfos;
      this.normalHistoryCard = normalRaceInfos;
      this.InvestmentAmount = InvestmentAmount;
      this.balance = balance;
    },

    updateDefaultBar(defaultBar) {
      this.defaultBar = defaultBar;
    },
    saveRaceInfoInStore() {
      this.$store.commit('setRaceinfos', this.defaultBar);
    }
  },

  async mounted() {

    this.socket = io("UmaLifeGo-ALB-2064613329.ap-northeast-1.elb.amazonaws.com:3000");

    if (this.$store.state.loadRaceInfoInStoreFlag) {
      this.defaultBar.selectDate = this.$store.state.selectDate;
      this.defaultBar.selectPlace = this.$store.state.selectPlace;
      this.defaultBar.selectRace_no = this.$store.state.selectRace_no;
      this.$store.commit('deleteRaceinfos');
      this.$store.commit('endLoadRaceInfoInStore');
    }
    
    this.loadRaceInfo();

  },

  components: {
    DefaultBar,
    HistoryCard,
  }
}
</script>
