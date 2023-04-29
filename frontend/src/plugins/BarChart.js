// インポートは使用するチャートの種類を取り込んでる。Barは棒グラフ。
//mixinsは図形のデータが変更した時に再描画するためのモジュール。
import { Bar, mixins } from 'vue-chartjs'

// 「チャートをリアクティブに再描画する」を再現している
const { reactiveProp } = mixins

export default {
    // mixinsで定義されているモジュールから関数・変数などを
    // 持ってきてこのプログラムの中に混ぜてしまうと思っておけば良い
    mixins: [Bar,reactiveProp],

    // チャートの表示に関するオプション
    props: ['options'],
    mounted() {

        // mixinsで引っ張ってきたモジュールの中に定義されているので宣言なく使用できる
        // ここもdata, optionsは内側で定義されている名前なので変更すると不具合が出る
        // チャートを描画するためのコード
        this.renderChart(this.data, this.options)
    }
}