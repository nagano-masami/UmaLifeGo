var express = require('express');
var router = express.Router();

var mysql = require('mysql'); //★追加
const config = require('../public/javascripts/db_config.js');
const DatabaseConnection = require('../public/javascripts/DatabaseConnection.js');

router.post('/', async (req, res, next) => {

    raceInfo = req.body;
    const connection = new DatabaseConnection();

    if (raceInfo.betting_ticket_id) {

        try {
            await connection.connect(config.mysql_setting);
            await connection.beginTransaction();
            await connection.query(config.updateRaceInfoSQL,
                [raceInfo.id,
                raceInfo.bettingTicketId,
                raceInfo.defaultBar.selectDate,
                raceInfo.defaultBar.selectPlace,
                raceInfo.defaultBar.selectRace_no,
                raceInfo.InvestmentAmount,
                raceInfo.balance,
                raceInfo.horceSelection1,
                raceInfo.horceSelection2,
                raceInfo.horceSelection3,
                raceInfo.selectFormula,
                raceInfo.selectAmount,
                raceInfo.selectUnitText,
                raceInfo.selectUnitDigit]);
            await connection.commit();
            res.send('OK');
        } catch (error) {
            console.error(error);
            await connection.rollback();
            res.send('NG');
        } finally {
            connection.end();
        }

    } else {
        try {
            await connection.connect(config.mysql_setting);
            await connection.beginTransaction();
            await connection.query(config.insertRaceInfoSQL,
                [raceInfo.id,
                raceInfo.defaultBar.selectDate,
                raceInfo.defaultBar.selectPlace,
                raceInfo.defaultBar.selectRace_no,
                raceInfo.InvestmentAmount,
                raceInfo.balance,
                raceInfo.horceSelection1,
                raceInfo.horceSelection2,
                raceInfo.horceSelection3,
                raceInfo.selectFormula,
                raceInfo.selectAmount,
                raceInfo.selectUnitText,
                raceInfo.selectUnitDigit]);
            await connection.commit();
            res.send('OK');
        } catch (error) {
            console.error(error);
            await connection.rollback();
            res.send('NG');
        } finally {
            connection.end();
        }
    }

});


module.exports = router;

