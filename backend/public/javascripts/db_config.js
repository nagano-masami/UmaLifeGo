exports.mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'essp_db',
    timezone: 'jst'
};
exports.loginSQL = 'SELECT * from USERS where id=? AND password=?';
exports.insertRecordSQL = 'INSERT INTO CHATS(id,user_id,message,create_date) VALUES(?, ?, ?, ?)';
exports.getHistoriesSQL = 'SELECT * FROM CHATS';
exports.deleteHistorySQL = 'TRUNCATE TABLE CHATS';
exports.getRaceInfosSQL = '';
exports.getInitInfoSQL = '';
exports.deleteRaceInfoSQL = '';
exports.getRaceInfoSQL = '';
exports.insertRaceInfoSQL = '';
exports.updateRaceInfoSQL = '';
exports.getOutputInfoSQL = "select date_format(v1.race_date, '%Y') race_year, sum(v1.refund_total_amount - v1.purchase_total_amount) total_balance, (sum(v1.refund_total_amount)/sum(v1.purchase_total_amount))*100 recovery_rate from v_race_total_amount v1 where v1.user_id = ? group by v1.user_id, date_format(v1.race_date, '%Y')"