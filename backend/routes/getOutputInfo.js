var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config = require('../public/javascripts/db_config.js');

// 画面が表示された際に実行される処理
router.post('/', (req, res, next) => {


    const id = req.body.id;
    //raceInfo = [{
    //    betting_ticket_id: 1,
    //    ticket_category_name: 'フォーメーション',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //},
    //{
    //    betting_ticket_id: 1,
    //    ticket_category_name: 'フォーメーション',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //},
    //{
    //    betting_ticket_id: 1,
    //    ticket_category_name: '通常',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //}];
    // res.send("ok");
    // データベースの設定情報
    var connection = mysql.createConnection(config.mysql_setting);

    // データを取り出す
    connection.query(config.getOutputInfoSQL, [id], function (error, results, fields) {
         // errorがnull、つまり成功した場合はOKを返す
         if (!error) {
             res.send(results);
         } else {
             res.send('NG');
             console.error(error);
         }
    }
    );
});

module.exports = router;
