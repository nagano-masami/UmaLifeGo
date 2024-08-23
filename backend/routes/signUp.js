var express = require('express');
//A router is valid middleware.
var router = express.Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const util = require('util');

var mysql = require('mysql');
const config  = require('../public/javascripts/db_config.js');

/* GET home page. */
router.post('/', function (req, res, next) {

    //トークン生成
    const token = crypto.randomBytes(32).toString('hex');

    
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()+2).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    // 2時間後のタイムスタンプ
    let expiresAt = formatDate(new Date());
    console.log(expiresAt); 

    // フロントからのパラメータ取得
    const id = req.body.id;
    const password = req.body.password; 
    const emailAddress = req.body.emailAddress;
    
    // コネクションの用意
    const connection = mysql.createConnection(config.mysql_setting);

    // query関数をプロミス化
    const query = util.promisify(connection.query).bind(connection);
    const beginTransaction = util.promisify(connection.beginTransaction).bind(connection);
    const commit = util.promisify(connection.commit).bind(connection);
    const rollback = util.promisify(connection.rollback).bind(connection);

    // アカウントが既に存在しているかどうか
    connection.query(config.getUserInfoSQL, [id,false],
        function (error, results, fields) {
            console.log(results + ":1");
            if (results.length > 1) {
                res.send('NG');
                throw error;
            }
        }
    );

    let ExistProvisionalRegistration = Boolean(false);
    // アカウントが存在していない場合、かつ仮登録があるかどうか。
    connection.query(config.getUserInfoSQL, [id,true],
        function (error, results, fields) {
            console.log(results + ":2");
            if (results.length >= 1) {
                ExistProvisionalRegistration = true;
            }
        }
    );

    // 整合性確保のためトランザクション張る
    connection.beginTransaction((err) => {
        if (err) {
            res.send('NG');
            throw err;
        }

        // 仮登録がある場合
        if (ExistProvisionalRegistration) {
            // 仮登録情報を更新
            connection.query(config.updateUserInfoSQL, [password, emailAddress, id],
                function (error, results, fields) {
                    console.log(results + ":3");
                    if (error) {
                        res.send('NG');
                        return connection.rollback(() => {
                            throw error;
                        });
                    }    
                }
            )
            // token更新
            connection.query(config.updateTokenInfoSQL, [token, id],
                function (error, results, fields) {
                    console.log(results + ":4");
                    if (error) {
                        res.send('NG');
                        return connection.rollback(() => {
                            throw error;
                        });
                    }    
                }
            )
        } else {
            // 仮登録情報を挿入
            connection.query(config.insertUserInfoSQL, [id,password, emailAddress],
                function (error, results, fields) {
                    console.log(results + ":5");
                    if (error) {
                        res.send('NG');
                        return connection.rollback(() => {
                            throw error;
                        });
                    }    
                }
            )

            // token登録
            connection.query(config.insertTokenInfoSQL, [id,token, expiresAt],
                function (error, results, fields) {
                    console.log(results + ":6");
                    if (error) {
                        res.send('NG');
                        return connection.rollback(() => {
                            throw error;
                        });
                    }    
                }
            )

        }

            
        connection.commit((err) => {    
            if (err) {
                res.send('NG');
                return connection.rollback(() => {
                    throw err;
                });   
            }   
        });
        
        console.log("success");
    })

    // token取得
    connection.query(config.getTokenInfoSQL, [id],
        function (error, results, fields) {
            console.log(results + ":7");
            if (results.length < 1) {
                res.send('NG');
                throw error;
            }

            // メール設定URL
            const baseUrl = 'http://localhost:3000/enablingAccount';

            // メール設定トークン
            let setURLtoken;
            var result = results[0]
            setURLtoken = result.token;
            console.log("token:" + setURLtoken); 
            // URL作成
            let verificationUrl = `${baseUrl}?token=${setURLtoken}`;
            console.log(verificationUrl);

            // Gmail用のSMTPトランスポートを設定
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: '4takahashi@gmail.com', // あなたのGmailアドレス
                    pass: 'ustm ldpr fiii iaxk', // アプリパスワード（通常のGmailパスワードではなく、アプリパスワード）
                },
            });
    
            // メールの内容を定義
            const mailOptions = {
                from: '4takahashi@gmail.com', // 送信元メールアドレス
                to: emailAddress, // 送信先メールアドレス
                subject: 'UmaLifeGoのアカウントの有効化', // メールの件名
                text: `以下のリンクをクリックして、アカウントを有効化してください: ${verificationUrl}\nもしお心当たりのない場合、本メールは破棄して頂けるようお願い致します。`, // メールの本文
            };

            // メールを送信
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Email sent: ' + info.response);
            });

        }
    );
    

});

module.exports = router;
