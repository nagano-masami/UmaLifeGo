var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config = require('../public/javascripts/db_config.js');

// 削除フォームの送信処理
router.post('/', (req, res, next) => {

    var connection = mysql.createConnection(config.mysql_setting);
    raceInfo = req.body;

    res.send('OK');
    // if (raceInfo.betting_ticket_id) {
    //     // データを取り出す
    //     connection.query(config.updateRaceInfoSQL,
    //         [raceInfo.id,
    //         raceInfo.bettingTicketId,
    //         raceInfo.defaultBar.selectDate,
    //         raceInfo.defaultBar.selectPlace,
    //         raceInfo.defaultBar.selectRace_no,
    //         raceInfo.InvestmentAmount,
    //         raceInfo.balance,
    //         raceInfo.horceSelection1,
    //         raceInfo.horceSelection2,
    //         raceInfo.horceSelection3,
    //         raceInfo.selectFormula,
    //         raceInfo.selectAmount,
    //         raceInfo.selectUnitText,
    //         raceInfo.selectUnitDigit], function (error, results, fields) {
    //             // errorがnull、つまり成功した場合はOKを返す
    //             if (!error) {
    //                 res.send('OK');
    //             } else {
    //                 res.send('NG');
    //             }
    //         }
    //     );
    // } else {
    //     // データを取り出す
    //     connection.query(config.insertRaceInfoSQL,
    //         [raceInfo.id,
    //         raceInfo.defaultBar.selectDate,
    //         raceInfo.defaultBar.selectPlace,
    //         raceInfo.defaultBar.selectRace_no,
    //         raceInfo.InvestmentAmount,
    //         raceInfo.balance,
    //         raceInfo.horceSelection1,
    //         raceInfo.horceSelection2,
    //         raceInfo.horceSelection3,
    //         raceInfo.selectFormula,
    //         raceInfo.selectAmount,
    //         raceInfo.selectUnitText,
    //         raceInfo.selectUnitDigit], function (error, results, fields) {
    //             // errorがnull、つまり成功した場合はOKを返す
    //             if (!error) {
    //                 res.send('OK');
    //             } else {
    //                 res.send('NG');
    //             }
    //         }
    //     );
    // }
});

module.exports = router;
