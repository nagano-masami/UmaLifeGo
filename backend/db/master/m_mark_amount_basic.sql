CREATE TABLE m_mark_amount_basic (
 user_id                VARCHAR(100) NOT NULL,
 betting_ticket_id      VARCHAR(25) NOT NULL,
 amount_unit_id         CHAR(3) NOT NULL,
 purchase_amount        INT NOT NULL,
 purchase_total_amount  INT,
 refund_amount          INT,
 PRIMARY KEY (user_id, betting_ticket_id),
 FOREIGN KEY (user_id) REFERENCES USERS(id) ON UPDATE CASCADE,
 FOREIGN KEY (betting_ticket_id) REFERENCES m_betting_ticket_info(betting_ticket_id) ON UPDATE CASCADE,
 FOREIGN KEY (amount_unit_id) REFERENCES d_amount_unit(id) ON UPDATE CASCADE
 );