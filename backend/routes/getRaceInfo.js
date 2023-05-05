var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config = require('../public/javascripts/db_config.js');

// 画面が表示された際に実行される処理
router.post('/', (req, res, next) => {

    const bettingTicketId = req.body.bettingTicketId;
    const id = req.body.id;
    // データベースの設定情報
    var connection = mysql.createConnection(config.mysql_setting);

    raceInfo = [{
        ticket_class_j_name: "フォーメーション",
        race_date: "2023-04-19",
        race_track_j_name: "東京",
        race_number: 10,
        purchase_total_amount: 100,
        refund_amount: 50,
        horseSelection1: ["05", "10"],
        horseSelection2: ["07", "09"],
        horseSelection3: ["09", "13"],
        ticket_selection_j_name: "3連複",
        purchase_amount: 1,
        amount_unit_j_name: "百円",
        amount_unit_number_j_name: 100,
        //{ text: null, digit: null }

    }
    ];

    res.send(raceInfo);

    // // データを取り出す
    // connection.query(config.getRaceInfosSQL, [id, bettingTicketId], function (error, results, fields) {
    //     // errorがnull、つまり成功した場合はOKを返す
    //     if (!error) {

    //         res.send(results);
    //     } else {
    //         res.send('NG');
    //         console.error(error);
    //     }
    // }
    // );
});

module.exports = router;
