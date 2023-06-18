CREATE TABLE d_amount_unit (
 id                CHAR(3) NOT NULL,
 japanese_name     VARCHAR(80) NOT NULL,
 english_name      VARCHAR(80),
 invalid_flag      BOOLEAN,
 sort_number       INT,
 outline           VARCHAR(80),
 PRIMARY KEY (id)
 );

insert into d_amount_unit values('001','百円','100yen',1,1000000,'');
insert into d_amount_unit values('002','千円','1000yen',1,2000000,'');
insert into d_amount_unit values('003','万円','10000yen',1,3000000,'');
