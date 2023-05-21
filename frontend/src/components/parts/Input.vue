<template>
  <v-card elevation="0">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold" style="color: var(--main-color)">
        Mark Card
      </h1>
    </v-card-title>

    <default-bar :defaultBar="defaultBar" @update-default-bar="updateDefaultBar" />

    <v-toolbar elevation="0">
      <v-spacer></v-spacer>
      <v-text-field label="投資額" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1" v-model="InvestmentAmount" readonly></v-text-field>
      <v-spacer></v-spacer>
      <v-text-field label="収支" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :type="show2 ? 'text' : 'password'"
        @click:append="show2 = !show2" v-model="balance"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn-toggle style="color: var(--main-color)" group>
        <v-btn @click="save">
          保存
          <v-icon>mdi-content-save-check</v-icon>
        </v-btn>
        <v-btn @click="deletion">
          削除
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-tabs v-model="tab" background-color="" color="#238842" grow>
      <v-tab href="#tab-1" @click="InvestmentAmountCalculationInBox"> ボックス </v-tab>
      <v-tab href="#tab-2" @click="InvestmentAmountCalculationInFormation"> フォーメーション </v-tab>
      <v-tab href="#tab-3" @click="InvestmentAmountCalculationInNormal"> 通常 </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item value="tab-1">
        <default-card :defaultCard="boxDefaultCard" @update-default-card="updateBoxDefaultCard" />
        <chip-group :selectionNumber="boxSelection1" @update-chip-group="updateBoxSelection1" />
      </v-tab-item>

      <v-tab-item value="tab-2">
        <default-card :defaultCard="formationDefaultCard" @update-default-card="updateFormationDefaultCard" />
        <v-card-text>1着目・1頭目</v-card-text>
        <chip-group :selectionNumber="formationSelection1" @update-chip-group="updateFormationSelection1" />
        <v-card-text>2着目・2頭目</v-card-text>
        <chip-group :selectionNumber="formationSelection2" @update-chip-group="updateFormationSelection2" />
        <v-card-text>3着目・3頭目</v-card-text>
        <chip-group :selectionNumber="formationSelection3" @update-chip-group="updateFormationSelection3" />
      </v-tab-item>

      <v-tab-item value="tab-3">
        <default-card :defaultCard="normalDefaultCard" @update-default-card="updateNormalDefaultCard" />
        <v-card-text>1着目・1頭目</v-card-text>
        <chip-group :selectionNumber="normalSelection1" @update-chip-group="updateNormalSelection1" />
        <v-card-text>2着目・2頭目</v-card-text>
        <chip-group :selectionNumber="normalSelection2" @update-chip-group="updateNormalSelection2" />
        <v-card-text>3着目・3頭目</v-card-text>
        <chip-group :selectionNumber="normalSelection3" @update-chip-group="updateNormalSelection3" />
      </v-tab-item>
    </v-tabs-items>
    {{ defaultBar }}
    {{ formationDefaultCard }}
    {{ boxDefaultCard }}
    {{ normalDefaultCard }}
    {{ boxSelection1 }}

    {{ formationSelection1 }}
    {{ formationSelection2 }}
    {{ formationSelection3 }}
    {{ normalSelection1 }}
    {{ normalSelection2 }}
    {{ normalSelection3 }}
    {{ quinella }}
    {{ exacta }}
    {{ trio }}
    {{ trifecta }}
  </v-card>
</template>

<script>
import DefaultBar from "../globals/DefaultBar.vue";
import DefaultCard from "../globals/DefaultCard.vue";
import ChipGroup from "../globals/ChipGroup.vue";
import axios from "axios";
export default {
  name: "Input",
  data() {
    return {
      tab: null,
      bettingTicketId:null,
      sizes: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
      show1: true,
      show2: true,


      defaultBar: {
        selectDate: null,
        selectPlace: null,
        selectRace_no: null
      },

      InvestmentAmount: null,
      balance: null,

      boxSelection1: [],
      boxDefaultCard: {
        selectFormula: null,
        selectAmount: null,
        selectUnit: { text: null, digit: null }
      },


      formationSelection1: [],
      formationSelection2: [],
      formationSelection3: [],
      formationDefaultCard: {
        selectFormula: null,
        selectAmount: null,
        selectUnit: { text: null, digit: null },
      },



      normalSelection1: [],
      normalSelection2: [],
      normalSelection3: [],
      normalDefaultCard: {
        selectFormula: null,
        selectAmount: null,
        selectUnit: { text: null, digit: null },
      },




      quinella: 0,
      exacta: 0,
      trio: 0,
      trifecta: 0


    }
  },
  methods: {

    // 投資額計算処理ボックス
    InvestmentAmountCalculationInBox: function () {
      if (this.boxDefaultCard.selectFormula && this.boxDefaultCard.selectAmount && this.boxDefaultCard.selectUnit.digit && this.boxSelection1) {

        var boxSelectionNum = this.boxSelection1.length;
        var combinations = 0;

        if (this.boxDefaultCard.selectFormula == '枠連' || this.boxDefaultCard.selectFormula == '馬連' || this.boxDefaultCard.selectFormula == 'ワイド') {
          combinations = boxSelectionNum * (boxSelectionNum - 1) / 2;
        } else if (this.boxDefaultCard.selectFormula == '馬単') {
          combinations = boxSelectionNum * (boxSelectionNum - 1);
        } else if (this.boxDefaultCard.selectFormula == '3連複') {
          combinations = boxSelectionNum * (boxSelectionNum - 1) * (boxSelectionNum - 2) / 6;
        } else if (this.boxDefaultCard.selectFormula == '3連単') {
          combinations = boxSelectionNum * (boxSelectionNum - 1) * (boxSelectionNum - 2);
        }

        this.InvestmentAmount = combinations * this.boxDefaultCard.selectAmount * this.boxDefaultCard.selectUnit.digit;

      } else {
        this.InvestmentAmount = null;
      }
    },

    // 投資額計算処理フォーメーション
    InvestmentAmountCalculationInFormation: function () {


      if (this.formationDefaultCard.selectFormula && this.formationDefaultCard.selectAmount && this.formationDefaultCard.selectUnit.digit) {


        var trifecta = 0;
        var exacta = 0;
        var quinella = 0;
        var trio = 0;
        var new_trio = 0;
        var trio_sort = 0;
        var trio_array = new Array(1);
        var combinations = 0;

        for (var i = 0; i < this.formationSelection1.length; i++) {

          for (var j = 0; j < this.formationSelection2.length; j++) {
            if (this.formationSelection1[i] != this.formationSelection2[j]) {
              //馬単=1,2位の着順をあてるの
              exacta++;

              if (this.formationSelection1[i] < this.formationSelection2[j]) {
                // 馬連=馬の組み合わせ。着順関係なし
                quinella++;
              }
              // 1頭に2頭の番号がいるかチェック。いなければ入る。
              else if (this.formationSelection1.indexOf(this.formationSelection2[j]) == -1) {
                quinella++;
              }
              // 2頭に1頭の番号がいるかチェック。いなければ入る。
              else if (this.formationSelection2.indexOf(this.formationSelection1[i]) == -1) {
                quinella++;
              }

              for (var k = 0; k < this.formationSelection3.length; k++) {
                if (this.formationSelection1[i] != this.formationSelection3[k]
                  && this.formationSelection2[j] != this.formationSelection3[k]) {
                  //３連単=着順もあてる
                  trifecta++;


                  trio_sort = new Array(this.formationSelection1[i], this.formationSelection2[j], this.formationSelection3[k]);
                  trio_sort = trio_sort.sort();
                  var trio_value = trio_sort[0] + trio_sort[1] + trio_sort[2];

                  for (var l = 0; l < trio_array.length; l++) {
                    if (trio_array[l] == trio_value) {
                      new_trio++;
                    }
                  }

                  if (!new_trio) {
                    // ３連複=着順関係なし
                    trio++;
                    trio_array.push(trio_value);
                  }
                  new_trio = 0;
                }
              }
            }
          }

        }

        if (this.formationDefaultCard.selectFormula == '枠連') {
          combinations = quinella
        } else if (this.formationDefaultCard.selectFormula == '馬連') {
          combinations = quinella
        } else if (this.formationDefaultCard.selectFormula == '馬単') {
          combinations = exacta
        } else if (this.formationDefaultCard.selectFormula == 'ワイド') {
          combinations = quinella
        } else if (this.formationDefaultCard.selectFormula == '3連複') {
          combinations = trio
        } else if (this.formationDefaultCard.selectFormula == '3連単') {
          combinations = trifecta
        }

        this.InvestmentAmount = combinations * this.formationDefaultCard.selectAmount * this.formationDefaultCard.selectUnit.digit;
        this.quinella = quinella;
        this.exacta = exacta;
        this.trio = trio;
        this.trifecta = trifecta;


      } else {
        this.InvestmentAmount = null;
      }
    },

    // 投資額計算処理通常
    InvestmentAmountCalculationInNormal: function () {

      if (this.normalDefaultCard.selectFormula && this.normalDefaultCard.selectAmount && this.normalDefaultCard.selectUnit.digit) {

        var combinations = 0;
        if ((this.normalDefaultCard.selectFormula == '枠連'
          || this.normalDefaultCard.selectFormula == '馬連'
          || this.normalDefaultCard.selectFormula == '馬単'
          || this.normalDefaultCard.selectFormula == 'ワイド')
          && this.normalSelection1[0]
          && this.normalSelection2[0]
          && this.normalSelection1[0] != this.normalSelection2[0]) {

          combinations = 1;
        } else if ((this.normalDefaultCard.selectFormula == '3連複'
          || this.normalDefaultCard.selectFormula == '3連単')
          && this.normalSelection1[0]
          && this.normalSelection2[0]
          && this.normalSelection3[0]
          && this.normalSelection1[0] != this.normalSelection2[0]
          && this.normalSelection2[0] != this.normalSelection3[0]
          && this.normalSelection1[0] != this.normalSelection3[0]) {

          combinations = 1;


        }


        this.InvestmentAmount = combinations * this.normalDefaultCard.selectAmount * this.normalDefaultCard.selectUnit.digit;

      } else {
        this.InvestmentAmount = null;
      }


    },

    updateDefaultBar(defaultBar) {
      this.defaultBar = defaultBar;
    },

    updateBoxDefaultCard(defaultCard) {
      this.boxDefaultCard = defaultCard;
      this.InvestmentAmountCalculationInBox();
    },
    updateFormationDefaultCard(defaultCard) {
      this.formationDefaultCard = defaultCard;
      this.InvestmentAmountCalculationInFormation();
    },
    updateNormalDefaultCard(defaultCard) {
      this.normalDefaultCard = defaultCard;
      this.InvestmentAmountCalculationInNormal();
    },

    updateBoxSelection1(selectionNumber) {
      this.boxSelection1 = selectionNumber;
      this.InvestmentAmountCalculationInBox();
    },

    updateFormationSelection1(selectionNumber) {
      this.formationSelection1 = selectionNumber;
      this.InvestmentAmountCalculationInFormation();
    },
    updateFormationSelection2(selectionNumber) {
      this.formationSelection2 = selectionNumber;
      this.InvestmentAmountCalculationInFormation();
    },
    updateFormationSelection3(selectionNumber) {
      this.formationSelection3 = selectionNumber;
      this.InvestmentAmountCalculationInFormation();
    },

    updateNormalSelection1(selectionNumber) {
      if (selectionNumber[0]) {
        this.normalSelection1 = [selectionNumber.pop()];

      } else {
        this.normalSelection1 = [];
      }
      this.InvestmentAmountCalculationInNormal();
    },
    updateNormalSelection2(selectionNumber) {

      if (selectionNumber[0]) {
        this.normalSelection2 = [selectionNumber.pop()];

      } else {
        this.normalSelection2 = [];
      }
      this.InvestmentAmountCalculationInNormal();
    },
    updateNormalSelection3(selectionNumber) {
      if (selectionNumber[0]) {
        this.normalSelection3 = [selectionNumber.pop()];

      } else {
        this.normalSelection3 = [];
      }
      this.InvestmentAmountCalculationInNormal();
    },

    // Mark Cardの保存処理
    save: async function () {
      if (this.defaultBar.selectDate
        && this.defaultBar.selectPlace
        && this.defaultBar.selectRace_no
        && this.InvestmentAmount
        && this.InvestmentAmount != 0
        && (this.balance == null || !isNaN(this.balance))) {

        const param = {
          id: this.$store.state.id,
          bettingTicketId: this.bettingTicketId,
          defaultBar: this.defaultBar,
          InvestmentAmount: this.InvestmentAmount,
          balance: this.balance,
          horceSelection1: null,
          horceSelection2: null,
          horceSelection3: null,
          selectFormula: null,
          selectAmount: null,
          selectUnitText: null,
          selectUnitDigit: null
        };

        if (this.tab == "tab-1") {

          param.horceSelection1 = this.boxSelection1;
          param.selectFormula = this.boxDefaultCard.selectFormula;
          param.selectAmount = this.boxDefaultCard.selectAmount;
          param.selectUnitText = this.boxDefaultCard.selectUnit.text;
          param.selectUnitDigit = this.boxDefaultCard.selectUnit.digit;
        }
        if (this.tab == "tab-2") {

          param.horceSelection1 = this.formationSelection1;
          if (this.formationDefaultCard.selectFormula == '枠連'
            || this.formationDefaultCard.selectFormula == '馬連'
            || this.formationDefaultCard.selectFormula == '馬単'
            || this.formationDefaultCard.selectFormula == 'ワイド') {
            param.horceSelection2 = this.boxSelection2;
          } else if (this.formationDefaultCard.selectFormula == '3連複'
            || this.formationDefaultCard.selectFormula == '3連単') {
            param.horceSelection2 = this.formationSelection2;
            param.horceSelection3 = this.formationSelection3;
          }
          param.selectFormula = this.formationDefaultCard.selectFormula;
          param.selectAmount = this.formationDefaultCard.selectAmount;
          param.selectUnitText = this.formationDefaultCard.selectUnit.text;
          param.selectUnitDigit = this.formationDefaultCard.selectUnit.digit;
        }
        if (this.tab == "tab-3") {

          param.horceSelection1 = this.normalSelection1;
          if (this.normalDefaultCard.selectFormula == '枠連'
            || this.normalDefaultCard.selectFormula == '馬連'
            || this.normalDefaultCard.selectFormula == '馬単'
            || this.normalDefaultCard.selectFormula == 'ワイド') {
            param.horceSelection2 = this.normalSelection2;
          } else if (this.normalDefaultCard.selectFormula == '3連複'
            || this.normalDefaultCard.selectFormula == '3連単') {
            param.horceSelection2 = this.normalSelection2;
            param.horceSelection3 = this.normalSelection3;
          }
          param.selectFormula = this.normalDefaultCard.selectFormula;
          param.selectAmount = this.normalDefaultCard.selectAmount;
          param.selectUnitText = this.normalDefaultCard.selectUnit.text;
          param.selectUnitDigit = this.normalDefaultCard.selectUnit.digit;
        }

        try {
          const result = await axios.post("http://localhost:3000/saveRaceInfo", param);
          if (result.data === "OK") {
            // 保存に成功した場合
            alert("正常に保存できました");
            this.deletion();
            if (this.bettingTicketId) {
              this.$store.commit('loadRaceInfoInStore');
              this.$router.push('/history');
            }
          } else {
            // 削除に失敗した場合
            console.log("保存に失敗しました。");
            alert("保存に失敗しました。");
          }
        } catch {
          alert("処理に失敗しました。");
        }
      } else {
        alert("入力内容が不足している、あるいは誤りがあります。");
      }
    },
    // Mark Cardの削除処理（クリア）
    deletion: function () {

      this.balance = null;
      if (this.tab == "tab-1") {

        this.boxSelection1 = [],
          this.boxDefaultCard = {
            selectFormula: null,
            selectAmount: null,
            selectUnit: { text: null, digit: null }
          }
      }
      if (this.tab == "tab-2") {
        this.formationSelection1 = [],
          this.formationSelection2 = [],
          this.formationSelection3 = [],
          this.formationDefaultCard = {
            selectFormula: null,
            selectAmount: null,
            selectUnit: { text: null, digit: null },
          }
      }
      if (this.tab == "tab-3") {
        this.normalSelection1 = [],
          this.normalSelection2 = [],
          this.normalSelection3 = [],
          this.normalDefaultCard = {
            selectFormula: null,
            selectAmount: null,
            selectUnit: { text: null, digit: null },
          }
      }

      this.quinella = 0
      this.exacta = 0;
      this.trio = 0;
      this.trifecta = 0;

    }
  },

  async mounted() {
    if (this.$store.state.bettingTicketId) {

      const param = {
        bettingTicketId: this.$store.state.bettingTicketId,
        id: this.$store.state.id
      };

      try {
        let result = await axios.post("http://localhost:3000/getRaceInfo", param);
        if (result.data !== 'NG') {

          let raceInfo = result.data[0];
          // 馬券情報の取得に成功した場合
          this.defaultBar.selectDate = raceInfo.race_date;
          this.defaultBar.selectPlace = raceInfo.race_track_j_name;
          this.defaultBar.selectRace_no = raceInfo.race_number;
          this.InvestmentAmount = raceInfo.purchase_total_amount;
          this.balance = raceInfo.refund_amount

          if (raceInfo.ticket_class_j_name == "ボックス") {
            this.tab = "tab-1";

            this.boxSelection1 = raceInfo.horseSelection1;
            if (raceInfo.ticket_selection_j_name == '枠連'
              || raceInfo.ticket_selection_j_name == '馬連'
              || raceInfo.ticket_selection_j_name == '馬単'
              || raceInfo.ticket_selection_j_name == 'ワイド') {
              this.boxSelection2 = raceInfo.horseSelection2;
            } else if (raceInfo.ticket_selection_j_name == '3連複'
              || raceInfo.ticket_selection_j_name == '3連単') {
              this.boxSelection2 = raceInfo.horseSelection2;
              this.boxSelection3 = raceInfo.horseSelection3;
            }
            this.boxDefaultCard.selectFormula = raceInfo.ticket_selection_j_name;
            this.boxDefaultCard.selectAmount = raceInfo.purchase_amount;
            this.boxDefaultCard.selectUnit.text = raceInfo.amount_unit_j_name;
            this.boxDefaultCard.selectUnit.digit = raceInfo.amount_unit_number_j_name;


          }
          if (raceInfo.ticket_class_j_name == "フォーメーション") {

            this.tab = "tab-2";
            this.formationSelection1 = raceInfo.horseSelection1;
            if (raceInfo.ticket_selection_j_name == '枠連'
              || raceInfo.ticket_selection_j_name == '馬連'
              || raceInfo.ticket_selection_j_name == '馬単'
              || raceInfo.ticket_selection_j_name == 'ワイド') {
              this.formationSelection2 = raceInfo.horseSelection2;
            } else if (raceInfo.ticket_selection_j_name == '3連複'
              || raceInfo.ticket_selection_j_name == '3連単') {
              this.formationSelection2 = raceInfo.horseSelection2;
              this.formationSelection3 = raceInfo.horseSelection3;
            }
            this.formationDefaultCard.selectFormula = raceInfo.ticket_selection_j_name;
            this.formationDefaultCard.selectAmount = raceInfo.purchase_amount;
            this.formationDefaultCard.selectUnit.text = raceInfo.amount_unit_j_name;
            this.formationDefaultCard.selectUnit.digit = raceInfo.amount_unit_number_j_name;

          }
          if (raceInfo.ticket_class_j_name == "通常") {

            this.tab = "tab-3";
            this.normalSelection1 = raceInfo.horseSelection1;
            if (raceInfo.ticket_selection_j_name == '枠連'
              || raceInfo.ticket_selection_j_name == '馬連'
              || raceInfo.ticket_selection_j_name == '馬単'
              || raceInfo.ticket_selection_j_name == 'ワイド') {
              this.normalSelection2 = raceInfo.horseSelection2;
            } else if (raceInfo.ticket_selection_j_name == '3連複'
              || raceInfo.ticket_selection_j_name == '3連単') {
              this.normalSelection2 = raceInfo.horseSelection2;
              this.normalSelection3 = raceInfo.horseSelection3;
            }
            this.normalDefaultCard.selectFormula = raceInfo.ticket_selection_j_name;
            this.normalDefaultCard.selectAmount = raceInfo.purchase_amount;
            this.normalDefaultCard.selectUnit.text = raceInfo.amount_unit_j_name;
            this.normalDefaultCard.selectUnit.digit = raceInfo.amount_unit_number_j_name;


          }

          this.bettingTicketId = this.$store.state.bettingTicketId;
          this.$store.commit('deleteBettingTicketId');
        } else {
          // 馬券情報の取得に失敗した場合
          console.log("馬券情報の取得に失敗しました。");
          alert("馬券情報の取得に失敗しました。");
        }
      } catch {
        alert("馬券情報取得処理に失敗しました。");
        this.$store.commit('deleteBettingTicketId');
        this.$store.commit('loadRaceInfoInStore');
        this.$router.push('/history');
      }
    }

  },
  components: {
    DefaultCard,
    ChipGroup,
    DefaultBar
  }
}
</script>