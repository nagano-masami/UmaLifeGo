-- m_betting_ticket_info
insert into m_betting_ticket_info values('admin', '00001','フェブラリーS-三連単','februaryS','2023/02/19','002',11,'003','008',cast( now() as datetime),cast( now() as datetime),10000000,null);
insert into m_betting_ticket_info values('admin', '00002','高松宮記念-三連複','takamatsumiyakinen','2023/03/26','007',11,'003','007',cast( now() as datetime),cast( now() as datetime),20000000,null);
insert into m_betting_ticket_info values('admin', '00003','高松宮記念-馬連','takamatsumiyakinen','2023/03/26','007',11,'003','004',cast( now() as datetime),cast( now() as datetime),21000000,null);
insert into m_betting_ticket_info values('admin', '00004','大阪杯-三連単','osakahai','2023/04/02','004',11,'002','008',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00005','大阪杯-馬単','osakahai','2023/04/02','004',11,'003','005',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00006','大阪杯-三連複','osakahai','2023/04/02','004',11,'003','007',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00007','桜花賞-三連単','oukashou','2023/04/09','004',11,'002','007',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00008','桜花賞-三連複','oukashou','2023/04/09','004',11,'003','007',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00009','桜花賞-単勝','oukashou','2023/04/09','004',11,'001','001',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00010','皐月賞-三連複1','satsukishou','2023/04/16','001',11,'003','007',cast( now() as datetime),cast( now() as datetime),30000000,null);
insert into m_betting_ticket_info values('admin', '00011','皐月賞-三連複2','satsukishou','2023/04/16','001',11,'003','007',cast( now() as datetime),cast( now() as datetime),30000000,null);

-- m_mark_amount_basic
insert into m_mark_amount_basic values('admin','00009','002',1,1000,0);

-- m_mark_horse_basic
insert into m_mark_horse_basic values('admin','00009','001',false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false);

-- m_mark_amount_box
insert into m_mark_amount_box values('admin','00004','001',2,1200,0);
insert into m_mark_amount_box values('admin','00007','001',1,2400,0);

-- m_mark_horse_box
insert into m_mark_horse_basic values('admin','00004','001',false,false,false,false,false,true,false,false,true,false,true,false,false,false,false,false,false,false);
insert into m_mark_horse_basic values('admin','00007','001',false,false,false,false,false,true,false,false,true,false,true,false,false,true,false,false,false,false);

-- m_mark_amount_formation
insert into m_mark_amount_formation values('admin','00001','001',2,2000,15400);
insert into m_mark_amount_formation values('admin','00002','001',2,3600,0);
insert into m_mark_amount_formation values('admin','00003','001',2,3600,15800);
insert into m_mark_amount_formation values('admin','00005','001',3,8700,0);
insert into m_mark_amount_formation values('admin','00006','001',1,1800,0);
insert into m_mark_amount_formation values('admin','00008','001',2,2400,9500);
insert into m_mark_amount_formation values('admin','00010','001',1,2500,3770);
insert into m_mark_amount_formation values('admin','00011','001',1,2600,3770);

-- m_mark_horse_formation
insert into m_mark_horse_formation values('admin','00001','001',false,false,false,false,false,false,true,false,false,false,false,false,false,false,true,false,false,false);
insert into m_mark_horse_formation values('admin','00001','002',false,false,false,true,false,false,true,false,false,false,false,false,false,false,true,false,false,false);
insert into m_mark_horse_formation values('admin','00001','003',false,false,true,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false);

insert into m_mark_horse_formation values('admin','00002','001',false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false);
insert into m_mark_horse_formation values('admin','00002','002',false,true,false,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false);
insert into m_mark_horse_formation values('admin','00002','003',false,true,false,false,true,true,true,true,false,false,true,false,false,true,false,false,false,true);

insert into m_mark_horse_formation values('admin','00003','001',false,false,false,false,false,true,false,true,false,false,false,false,false,false,true,false,false,false);
insert into m_mark_horse_formation values('admin','00003','002',false,true,false,false,false,true,true,true,false,false,true,false,true,false,true,false,false,true);

insert into m_mark_horse_formation values('admin','00005','001',false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00005','002',true,false,false,false,false,true,false,false,false,false,true,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00005','003',true,true,false,true,false,true,true,true,true,false,false,false,false,false,false,false,false,false);

insert into m_mark_horse_formation values('admin','00006','001',false,false,false,false,false,true,false,false,true,false,true,false,false,false,false,false,false,false);
insert into m_mark_horse_formation values('admin','00006','002',false,true,false,true,false,false,true,true,false,false,false,false,true,true,false,false,false,false);

insert into m_mark_horse_formation values('admin','00008','001',false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00008','002',false,false,false,false,false,true,false,false,true,false,true,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00008','003',false,false,true,false,false,true,false,true,true,false,true,false,false,true,false,false,false,false);

insert into m_mark_horse_formation values('admin','00010','001',false,false,false,false,false,false,false,true,false,false,false,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00010','002',false,false,false,false,false,false,true,true,false,false,false,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00010','003',true,true,false,true,true,false,true,true,false,false,true,false,false,true,true,true,false,true);

insert into m_mark_horse_formation values('admin','00011','001',false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00011','002',false,false,false,false,true,false,true,true,false,false,true,false,false,true,false,false,false,false);
insert into m_mark_horse_formation values('admin','00011','003',true,true,false,true,true,false,true,true,false,false,true,false,false,true,false,true,false,true);
