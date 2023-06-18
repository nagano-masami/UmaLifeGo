CREATE TABLE d_ticket_selections (
 id                CHAR(3) NOT NULL,
 japanese_name     VARCHAR(80) NOT NULL,
 english_name      VARCHAR(80),
 invalid_flag      BOOLEAN,
 sort_number       INT,
 outline           VARCHAR(80),
 PRIMARY KEY (id)
 );

 insert into d_ticket_selections values('001','単勝','win',1,1000000,'');
 insert into d_ticket_selections values('002','複勝','place',1,2000000,'');
 insert into d_ticket_selections values('003','枠連','bracket quinella',1,3000000,'');
 insert into d_ticket_selections values('004','馬連','quinella',1,4000000,'');
 insert into d_ticket_selections values('005','馬単','exacta',1,5000000,'');
 insert into d_ticket_selections values('006','ワイド','quinella place',1,6000000,'');
 insert into d_ticket_selections values('007','三連複','trio',1,7000000,'');
 insert into d_ticket_selections values('008','三連単','tierce',1,8000000,'');