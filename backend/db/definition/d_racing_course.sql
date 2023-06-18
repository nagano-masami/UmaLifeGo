CREATE TABLE d_racing_course (
 id                CHAR(3) NOT NULL,
 japanese_name     VARCHAR(80) NOT NULL,
 english_name      VARCHAR(80),
 invalid_flag      BOOLEAN,
 sort_number       INT,
 outline           VARCHAR(80),
 PRIMARY KEY (id)
 );

 insert into d_racing_course values('001','中山','Nakayama',1,1000000,'');
 insert into d_racing_course values('002','東京','Tokyo',1,1100000,'');
 insert into d_racing_course values('003','京都','Kyoto',1,1200000,'');
 insert into d_racing_course values('004','阪神','Hanshin',1,1300000,'');
 insert into d_racing_course values('005','福島','Fukushima',1,2000000,'');
 insert into d_racing_course values('006','新潟','Nigata',1,2100000,'');
 insert into d_racing_course values('007','中京','Chukyo',1,2200000,'');
 insert into d_racing_course values('008','小倉','Kokura',1,2300000,'');
 insert into d_racing_course values('009','札幌','Sapporo',1,2400000,'');
 insert into d_racing_course values('010','函館','Hakodate',1,2500000,'');