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
exports.getRaceInfosSQL = "select v1.betting_ticket_id betting_ticket_id, d1.japanese_name ticket_category_name, v1.purchase_total_amount purchase_total_amount, v1.refund_amount refund_amount from (select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_box m1 union all select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_formation m2 union all select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_basic m3) v1 inner join m_betting_ticket_info m4 on m4.user_id = v1.user_id and m4.betting_ticket_id = v1.betting_ticket_id inner join d_ticket_category d1 on d1.id = m4.ticket_category_id where v1.user_id = ? and m4.race_date = ? and m4.race_track_id = ? and m4.race_number = ? order by m4.registration_date limit 50;";
exports.getInitInfoSQL = "select v1.betting_ticket_id betting_ticket_id, d1.japanese_name ticket_category_name, v1.purchase_total_amount purchase_total_amount, v1.refund_amount refund_amount from (select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_box m1 union all select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_formation m2 union all select user_id, betting_ticket_id, purchase_total_amount, refund_amount from m_mark_amount_basic m3) v1 inner join m_betting_ticket_info m4 on m4.user_id = v1.user_id and m4.betting_ticket_id = v1.betting_ticket_id inner join d_ticket_category d1 on d1.id = m4.ticket_category_id where v1.user_id = ? order by m4.registration_date limit 50;";
exports.deleteRaceInfoSQL = '';
exports.getRaceInfoSQL = "select v1.ticket_category_id, v1.ticket_category_j_name, v1.race_date, v1.race_track_j_name, v1.race_number, v1.purchase_total_amount, v1.refund_amount, v1.select_item_id, v1.number1_flag, v1.number2_flag, v1.number3_flag, v1.number4_flag, v1.number5_flag, v1.number6_flag, v1.number7_flag, v1.number8_flag, v1.number9_flag, v1.number10_flag, v1.number11_flag, v1.number12_flag, v1.number13_flag, v1.number14_flag, v1.number15_flag, v1.number16_flag, v1.number17_flag, v1.number18_flag, v1.ticket_selection_j_name, v1.purchase_amount, v1.amount_unit_j_name, case v1.amount_unit_id when '001' then 100 when '002' then 1000 when '003' then 10000 else 1 end from v_betting_ticket_info v1 where v1.user_id = ? and v1.betting_ticket_id = ?;";
exports.insertRaceInfoSQL = '';
exports.updateRaceInfoSQL = '';
exports.getOutputInfoSQL = "select date_format(v1.race_date, '%Y') race_year, sum(v1.refund_total_amount - v1.purchase_total_amount) total_balance, (sum(v1.refund_total_amount)/sum(v1.purchase_total_amount))*100 recovery_rate from v_race_total_amount v1 where v1.user_id = ? group by v1.user_id, date_format(v1.race_date, '%Y')";


