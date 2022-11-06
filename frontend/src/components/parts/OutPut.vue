<template>
  <div>
    <BarChart :chart-data="datacollection" :options="options"></BarChart>
  </div>
</template>

<script>
// BarChart.jsでvue-chart.jsを読み込んでる。分けるのが公式の推奨らしい？
import BarChart from "./BarChart.js"; 

export default {
  name: "LineSample",
  components: {
    BarChart
  },  

  // BarChart.jsに与える情報を入れる変数、data。変数名は変えてはいけない
  data:() => ({
    // 下記のdatacollection(この変数名はなんでもいい)はデータを入れるようの変数。
    datacollection: null,

    // 全体的なオプション定義を入れる変数
    options: null
  }),

  // ロード時fillData()が実行される(mounted)
  mounted() {
    this.fillData();
  },

  methods: {   
    // datacollection(図形データ)とoptions(全体的なオプション)に中身を代入するメソッド。
    fillData() {
      // mockデータを使い、のちにdbから取得したデータに変える予定
      this.datacollection = {
        // グラフの下に記載されるラベル
        labels: [2001,2002,2003,2004],

        // datasetsの中にデータやオプションをグループ事に定義する
        datasets: [
          {
            // データ1セットのグループ名(オプション)
            label: "データセットラベルA",

            // 背景色(オプション)
            backgroundColor: "#f87979",

            // データ
            data: [20, 30, 60, 50]
          },
          {
            // データ1セットのグループ名(オプション)
            label: "データセットラベルB",

            // 背景色(オプション)
            backgroundColor: "#122911",

            // データ
            data: [26, 39, 70, 90]
          }
        ]
      };

      // optionsに全体的なオプションを定義する
      this.options = {

        // ブラウザの横幅に応じて高さを自動調整する。
        responsive: true,

        // trueだと横幅はレスポンシブになるが縦幅は変更されないというもの
        maintainAspectRatio: false,

        // グループ名(ラベル)の位置を下に配置
        legend: {
          position: "bottom"
        },

        // layoutの内側は常にpaddingしか指定できない。CSSのpaddingとほぼ同様
        layout: {
          padding: 20
        },

        scales: {
          yAxes: [
            {
              ticks: {
                // メモリを０からスタートさせるオプション
                beginAtZero: true, 

                // メモリの最小値、最大値
                min: 0,
                max: 100
              }
            }
          ]
        }
      }
    }
  },
};


</script>