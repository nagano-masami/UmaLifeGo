exports.mysql_setting = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    timezone: process.env.timezone
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