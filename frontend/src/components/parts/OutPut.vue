<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <BarChart
          :styles="myStyles"
          :chart-data="datacollection"
          :options="options"
        ></BarChart>
      </v-col>
    </v-row>

    <v-row dense align="center" justify="space-between">
      <v-col cols="4" offset="1" style="color: var(--main-color)">
        <h1>Your Uma Life</h1>
      </v-col>
    </v-row>

    <v-row dense align="center" justify="center">
      <v-col cols="2">
        <v-card class="elevation-0">
          <v-card-text>
            <v-form>
              <v-text-field
                reverse
                label="当年収支"
                id="balanceInYear"
                name="balanceInYear"
                v-model="balanceInYear"
                readonly
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card class="elevation-0">
          <v-card-text>
            <v-form>
              <v-text-field
                reverse
                label="当年回収率"
                id="recoveryRateInYear"
                name="recoveryRateInYear"
                v-model="recoveryRateInYear"
                readonly
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

<!--     <v-row dense align="center" justify="space-between">
      <v-col cols="2" offset="1">
        <v-select label="過去戦績(年)" :items="months"></v-select>
      </v-col>
    </v-row> -->

    <v-row dense align="center" justify="center">
      <v-data-table
        :headers="tableheaders"
        :items="tablevalue"
        class="elevation-10"
      >
          <template v-slot:[`item.kaisyuritu`]="{item}">
            <v-chip
              :color="getColor(item.kaisyuritu)"
              dark
            >
              {{ item.kaisyuritu }}
            </v-chip>

          </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
// BarChart.jsでvue-chart.jsを読み込んでる。分けるのが公式の推奨らしい？
import BarChart from "../../plugins/BarChart";

export default {
  name: "LineSample",
  components: {
    BarChart,
  },

  // BarChart.jsに与える情報を入れる変数、data。変数名は変えてはいけない
  data: () => ({
    // 下記のdatacollection(この変数名はなんでもいい)はデータを入れるようの変数。
    datacollection: null,

    // 全体的なオプション定義を入れる変数
    options: null,
    months: [
      "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",
    ],
    tableheaders: [
      {
        text: '年',
        align: 'center',
        sortable: false,
        value: 'year'
      },
      {
        text: '収支（払戻額ー購入額：円）',
        align: 'center',
        sortable: false,
        value: 'syushi'
      },
      {
        text: '回収率（払戻額/購入額：％）',
        align: 'center',
        sortable: false,
        value: 'kaisyuritu'}
    ],
    tablevalue: [
      { year: '2023' , syushi: '123' , kaisyuritu: '345'},
      { year: '2022' , syushi: '123' , kaisyuritu: '098'},
      { year: '2021' , syushi: '123' , kaisyuritu: '123'},
      { year: '2020' , syushi: '123' , kaisyuritu: '012'},
    ],
    showPassword: false,
    balanceInYear: "0003",
    recoveryRateInYear: "0004",
    balanceInMonth: "0007",
    recoveryRateInMonth: "0008",
  }),

  // ロード時fillData()が実行される(mounted)
  mounted() {
    this.fillData();
    this.myStyles();
  },

  methods: {
    // datacollection(図形データ)とoptions(全体的なオプション)に中身を代入するメソッド。
    fillData() {
      // mockデータを使い、のちにdbから取得したデータに変える予定
      this.datacollection = {
        // グラフの下に記載されるラベル
        labels: [2001, 2002, 2003, 2004],

        // datasetsの中にデータやオプションをグループ事に定義する
        datasets: [
          {
            // 背景色(オプション)
            backgroundColor: [""],

            // データ
            data: [-200, -300, 600, 500],
          },
        ],
      };

      for (var i = 0; i < this.datacollection.datasets[0].data.length; i++) {
        if (this.datacollection.datasets[0].data[i] > 0) {
          this.datacollection.datasets[0].backgroundColor[i] = "#00C853"; // 値が正の場合は青
        } else {
          this.datacollection.datasets[0].backgroundColor[i] = "#FFD600"; // 値が負の場合は赤
        }
      }

      // optionsに全体的なオプションを定義する
      this.options = {
        // ブラウザの横幅に応じて高さを自動調整する。
        responsive: true,

        // trueだと横幅はレスポンシブになるが縦幅は変更されないというもの
        maintainAspectRatio: false,

        // グループ名(ラベル)の位置を下に配置
        legend: {
          position: "bottom",
          display: false,
        },

        // layoutの内側は常にpaddingしか指定できない。CSSのpaddingとほぼ同様
        layout: {
          padding: 20,
        },

        scales: {
          // X軸の設定
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "(年)",
              },
            },
          ],
          // Y軸の設定
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "(万)",
              },
              ticks: {
                // メモリを０からスタートさせるオプション
                beginAtZero: true,

                // メモリの最小値、最大値
                min: -1000,
                max: 1000,
              },
            },
          ],
        },
        title: {
          display: true, // タイトルを表示する
          text: "人生の縮図", // タイトルのテキスト
        },
      };
    },
    myStyles() {
      return {
        width: `100px`,

        maintainAspectRatio: false,
      };
    },
    getColor(kaisyuritu){
      if (kaisyuritu > 100) return '#00C853'
      else if (kaisyuritu < 100) return '#FFD600'
      else return 'red'
    },
    
  },
};
</script>
<style>
.icon {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
}
</style>