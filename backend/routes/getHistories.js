var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config  = require('../public/javascripts/db_config.js');

// 画面が表示された際に実行される処理
router.post('/', (req, res, next) => {

  // データベースの設定情報
  var connection = mysql.createConnection(config.mysql_setting);

  // データを取り出す
  connection.query(config.getHistoriesSQL, function (error, results, fields) {
    // errorがnull、つまり成功した場合はOKを返す
    if (!error) {
      res.send(results);
    } else {
      res.send('NG');
    }
  }
  );
});

module.exports = router;
