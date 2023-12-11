var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config  = require('../public/javascripts/db_config.js');
const DatabaseConnection = require('../public/javascripts/DatabaseConnection.js');

router.post('/', async (req, res, next) => {

  const betting_ticket_id = req.body.betting_ticket_id;
  const id = req.body.id;
  // const connection = new DatabaseConnection();

  var connection = mysql.createConnection(config.mysql_setting);

  // チケット種別によって削除SQLを変更するためにdbから情報を取得
  var ticketCategoryId = "";
  connection.query(config.getTicketCategorySQL, [id, betting_ticket_id], function (error, results, fields){
    if (error) {
      res.send('NG');
      throw error;
    }
    
    ticketCategoryId = results[0].tikcet_category_id;
  });

  // チケット種別によって削除SQLを変える
  var executeDeleteAmountSQL = "";
  var executeDeleteHorseSQL = "";

  switch(ticketCategoryId){
    case '002':
      executeDeleteAmountSQL = config.deleteBoxMarkAmountSQL;
      executeDeleteHorseSQL = config.deleteBoxMarkHorseSQL;
      break;
    case '003':
      executeDeleteAmountSQL = config.deleteFormationMarkAmountSQL;
      executeDeleteHorseSQL = config.deleteFormationMarkHorseSQL;
      break;
    default:
      executeDeleteAmountSQL = config.deleteBasicMarkAmountSQL;
      executeDeleteHorseSQL = config.deleteBasicMarkHorseSQL;
      break;
  }

  // 整合性確保のためトランザクション張る
  connection.beginTransaction((err) => {
    if (err) {
      res.send('NG');
      throw err;
    }

    // 馬券情報削除
    connection.query(config.deleteRaceInfoSQL, [id, betting_ticket_id], function (error, results, fields){
      if (error) {
        res.send('NG');
        return connection.rollback(() => { throw error; });
      }
    });
    // 金額削除
    connection.query(executeDeleteAmountSQL, [id, betting_ticket_id], function (error, results, fields){
      if (error) {
        res.send('NG');
        return connection.rollback(() => { throw error; });
      }
    });
    // 馬番号削除
    connection.query(executeDeleteHorseSQL, [id, betting_ticket_id], function (error, results, fields){
      if (error) {
        res.send('NG');
        return connection.rollback(() => { throw error; });
      }
    });

    connection.commit((err) => {
      if (err) {
          res.send('NG');
          return connection.rollcack(()=>{
              throw err;
          });
      }
    });
    console.log("success");
    res.send('OK');

  })
});


module.exports = router;

