var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config  = require('../public/javascripts/db_config.js');
const DatabaseConnection = require('../public/javascripts/DatabaseConnection.js');

router.post('/', async (req, res, next) => {

  const betting_ticket_id = req.body.betting_ticket_id;
  const id = req.body.id;
  const connection = new DatabaseConnection();

  try {
    await connection.connect(config.mysql_setting);
    await connection.beginTransaction();
    await connection.query(config.deleteRaceInfoSQL,[id,betting_ticket_id]);
    await connection.commit();
    res.send('OK');
  } catch (error) {
    console.error(error);
    await connection.rollback();
    res.send('NG');
  } finally {
    connection.end();
  }
});


module.exports = router;

