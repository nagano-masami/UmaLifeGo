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
exports.getOutputInfoSQL = '';