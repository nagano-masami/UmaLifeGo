var express = require('express');
//A router is valid middleware.
var router = express.Router();

var mysql = require('mysql');
const config  = require('../public/javascripts/db_config.js');

/* GET home page. */
router.post('/', function (req, res, next) {

    // フロントからのパラメータ取得
    const id = req.body.id;
    const password = req.body.password;

    // コネクションの用意
    const connection = mysql.createConnection(config.mysql_setting);

    connection.query(config.loginSQL, [id, password],
        function (error, results, fields) {
            console.log(results);
            if (results.length >= 1) {
                res.send('OK');
            } else {
                res.send('NG');
            }
        }
    );
});

module.exports = router;
