var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config  = require('../public/javascripts/db_config.js');

// 削除フォームの送信処理
router.post('/', (req, res, next) => {

  const betting_ticket_id = req.body.betting_ticket_id;
  const id = req.body.id;
  // データベースの設定情報
  var connection = mysql.createConnection(config.mysql_setting);

  // データを取り出す
  connection.query(config.deleteRaceInfoSQL,[id,betting_ticket_id] ,function (error, results, fields) {
    // errorがnull、つまり成功した場合はOKを返す
    if (!error) {
      res.send('OK');
    } else {
      res.send('NG');
    }
  }
  );
});

module.exports = router;
