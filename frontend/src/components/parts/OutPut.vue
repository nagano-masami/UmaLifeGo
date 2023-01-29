<template>
<v-container class="fill-height" fluid>
  <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="総収支"
                    id="allExpenses"
                    name="allExpenses"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                    v-model="allExpenses"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>      
  </v-row>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <BarChart :styles="myStyles" :chart-data="datacollection" :options="options"></BarChart> 
      </v-col>
    </v-row>
   
   
    <v-row dense align="center" justify="center">
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="当年軍資金"
                    id="militaryFundsInYear"
                    name="militaryFundsInYear"
                    v-model="militaryFundsInYear"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
              
            </v-card>
          </v-col> 
          <v-col cols="1"><div class="icon"><v-icon>mdi-gamepad-round</v-icon></div></v-col>
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="当年損益"
                    id="profitAndLossInYear"
                    name="profitAndLossInYear"
                    v-model="profitAndLossInYear"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>   
          <v-col cols="1"><div class="icon"><v-icon>mdi-drag-horizontal-variant</v-icon></div></v-col>          
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
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
            <v-card
              class="elevation-12"
              >
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

        <v-row dense align="center" justify="space-between">
          
          <v-col cols="2" offset="1"> 
            <v-select
              label="過去戦績(月)"
              :items="months"
            ></v-select>
          </v-col>
       
        </v-row>


        <v-row dense align="center" justify="center">
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="指定月軍資金"
                    id="militaryFundsInMonth"
                    name="militaryFundsInMonth"
                    v-model="militaryFundsInMonth"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
              
            </v-card>
          </v-col> 
          <v-col cols="1"><div class="icon"><v-icon>mdi-gamepad-round</v-icon></div></v-col>
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="指定月損益"
                    id="profitAndLossInMonth"
                    name="profitAndLossInMonth"
                    v-model="profitAndLossInMonth"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>   
          <v-col cols="1"><div class="icon"><v-icon>mdi-drag-horizontal-variant</v-icon></div></v-col>          
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="指定月収支"
                    id="balanceInMonth"
                    name="balanceInMonth"
                    v-model="balanceInMonth"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>   
          <v-col cols="2">
            <v-card
              class="elevation-12"
              >
              <v-card-text>
                <v-form>
                  <v-text-field
                    reverse
                    label="指定月回収率"
                    id="recoveryRateInMonth"
                    name="recoveryRateInMonth"
                    v-model="recoveryRateInMonth"
                    readonly
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>   
        </v-row>
    
</v-container>

             
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
    options: null,
    months:['1月', '2月', '3月', '4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    showPassword: false,
    allExpenses:"0000",
    militaryFundsInYear: "0001",
    profitAndLossInYear:"0002",
    balanceInYear:"0003",
    recoveryRateInYear:"0004",
    militaryFundsInMonth:"0005",
    profitAndLossInMonth:"0006",
    balanceInMonth:"0007",
    recoveryRateInMonth:"0008"
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
        labels: [2001,2002,2003,2004],

        // datasetsの中にデータやオプションをグループ事に定義する
        datasets: [
          {
           

            // 背景色(オプション)
            backgroundColor: ["#f87979"],

            // データ
            data: [-20, -30, 60, 50]
          }
        ]

        
      };

      for (var i = 0; i < this.datacollection.datasets[0].data.length; i++) {
  if (this.datacollection.datasets[0].data[i] > 0) {
    this.datacollection.datasets[0].backgroundColor[i] = '#3F88C5' // 値が正の場合は青
  } else {
    this.datacollection.datasets[0].backgroundColor[i] = '#FF5E5B' // 値が負の場合は赤
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
          display: false
        },

        // layoutの内側は常にpaddingしか指定できない。CSSのpaddingとほぼ同様
        layout: {
          padding: 20
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
                
              }
            }
          ]
        }
      }
    },
    myStyles(){
      return{
        width: `100px`,
      
        maintainAspectRatio: false
      }
    },
  // async mounted() {
  //   this.socket = io("localhost:3000");

  //   // 初期表示時にDBのレコードを取得する
  //   try {
  //     const result = await axios.post("http://localhost:3000/getHistories");
  //     if (result.data !== "NG") {
  //       // 履歴の取得に成功した場合
  //       this.messages = result.data;
  //     } else {
  //       // 履歴の取得に失敗した場合0
  //       console.log("履歴の表示に失敗しました。");
  //     }
  //   } catch {
  //     alert("処理に失敗しました。");
  //   }

  //   // 投稿されたデータの取得
  //   this.socket.on("MESSAGE", (data) => {
  //     this.messages = data;
  //   });
  // },
}
}


</script>
<style>
.right-input input {
        text-align: center;
      }
.icon{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        
  }
</style>