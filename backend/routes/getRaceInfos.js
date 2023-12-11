var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config = require('../public/javascripts/db_config.js');

// 画面が表示された際に実行される処理
router.post('/', (req, res, next) => {

    const defaultBar = req.body.defaultBar;
    const id = req.body.id;
    // データベースの設定情報
    var connection = mysql.createConnection(config.mysql_setting);

    //raceInfo = [{
    //    betting_ticket_id: 1,
    //    ticket_category_name: 'ボックス',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //},
    //{
    //    betting_ticket_id: 100,
    //    ticket_category_name: 'フォーメーション',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //},
    //{
    //    betting_ticket_id: 2,
    //    ticket_category_name: '通常',
    //    purchase_total_amount: 100,
    //    refund_amount: 10
    //}];

    //res.send(raceInfo);

    // データを取り出す
    var race_cource = "";
    switch(defaultBar.selectPlace){
        case "中山": race_cource =  "001"; break;
        case "東京": race_cource =  "002"; break;
        case "京都": race_cource =  "003"; break;
        case "阪神": race_cource =  "004"; break;
        case "福島": race_cource =  "005"; break;
        case "新潟": race_cource =  "006"; break;
        case "中京": race_cource =  "007"; break;
        case "小倉": race_cource =  "008"; break;
        case "札幌": race_cource =  "009"; break;
        case "函館": race_cource =  "010"; break;
    }

    connection.query(config.getRaceInfosSQL, [id, defaultBar.selectDate, race_cource, defaultBar.selectRace_no], function (error, results, fields) {
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
