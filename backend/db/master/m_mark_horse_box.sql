CREATE TABLE m_mark_horse_box (
 user_id                VARCHAR(100) NOT NULL,
 betting_ticket_id      VARCHAR(25) NOT NULL,
 select_item_id         CHAR(3) NOT NULL,
 number1_flag           BOOLEAN,
 number2_flag           BOOLEAN,
 number3_flag           BOOLEAN,
 number4_flag           BOOLEAN,
 number5_flag           BOOLEAN,
 number6_flag           BOOLEAN,
 number7_flag           BOOLEAN,
 number8_flag           BOOLEAN,
 number9_flag           BOOLEAN,
 number10_flag          BOOLEAN,
 number11_flag          BOOLEAN,
 number12_flag          BOOLEAN,
 number13_flag          BOOLEAN,
 number14_flag          BOOLEAN,
 number15_flag          BOOLEAN,
 number16_flag          BOOLEAN,
 number17_flag          BOOLEAN,
 number18_flag          BOOLEAN,
 PRIMARY KEY (user_id, betting_ticket_id, select_item_id),
 FOREIGN KEY (user_id) REFERENCES USERS(id) ON UPDATE CASCADE,
 FOREIGN KEY (betting_ticket_id) REFERENCES m_betting_ticket_info(betting_ticket_id) ON UPDATE CASCADE
 );