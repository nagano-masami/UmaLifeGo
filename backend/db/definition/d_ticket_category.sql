CREATE TABLE d_ticket_category (
 id                CHAR(3) NOT NULL,
 japanese_name     VARCHAR(80) NOT NULL,
 english_name      VARCHAR(80),
 invalid_flag      BOOLEAN,
 sort_number       INT,
 outline           VARCHAR(80),
 PRIMARY KEY (id)
 );

 insert into d_ticket_category values('001','基本','Basic',1,1000000,'');
 insert into d_ticket_category values('002','ボックス','Box',1,2000000,'');
 insert into d_ticket_category values('003','フォーメーション','Formation',1,3000000,'');