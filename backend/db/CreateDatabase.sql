create database essp_db;
use essp_db

CREATE TABLE USERS (
 id            VARCHAR(100) NOT NULL,
 password      VARCHAR(10)  NOT NULL,
 name          VARCHAR(100) NOT NULL,
 department    VARCHAR(100) NOT NULL,
 PRIMARY KEY (id));

insert into USERS values('admin','admin','administrator','all');
insert into USERS values('test001','test001','testname','testdepartment');

CREATE TABLE CHATS (
 id           INT(100) NOT NULL,
 user_id      VARCHAR(100) NOT NULL DEFAULT 'admin',
 message      VARCHAR(500) NOT NULL DEFAULT 'No message.',
 create_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
 PRIMARY KEY (id),
 INDEX id_ind (user_id),
 FOREIGN KEY (user_id)
   REFERENCES USERS (id)
   ON DELETE SET DEFAULT
   ON UPDATE CASCADE
 );

insert into CHATS values(1,'admin','ここからメッセージが始まる',CURRENT_TIMESTAMP);