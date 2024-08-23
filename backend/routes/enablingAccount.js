var express = require('express');
//A router is valid middleware.
var router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');

var mysql = require('mysql');
const config  = require('../public/javascripts/db_config.js');

router.get('/', function (req, res, next) {


    //トークン
    const token = req.query.token;
    // コネクションの用意
    const connection = mysql.createConnection(config.mysql_setting);

    let user_id;
    // トークン比較
    connection.query(config.compareTokenInfoSQL, [token],
        function (error, results, fields) {
            console.log(1); 
            console.log(results);          
            if (results.length === 0) {
                console.log(2); 
                res.send('NG');
            }

            user_id = results[0].user_id;
        }
    );

    // アカウント有効化
    // 整合性確保のためトランザクション張る
    connection.beginTransaction((err) => {
        if (err) {
            console.log(3); 
            res.send('NG');
            throw err;
        }


        connection.query(config.updateUserInfoSQL, [user_id],
            function (error, results, fields) {
                console.log(4); 
                console.log(results);
                if (error) {
                    console.log(5); 
                    res.send('NG');
                    return connection.rollback(() => {
                        throw error;
                    });
                }
            }
        );

        connection.commit((err) => {
            if (err) {
                console.log(6); 
                res.send('NG');
                return connection.rollback(() => {
                    throw err;
                });
            }
        });
        
        console.log("success");

    })
});

module.exports = router;