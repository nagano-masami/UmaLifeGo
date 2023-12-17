create view v_betting_ticket_info
(user_id
,betting_ticket_id
,betting_ticket_j_name
,betting_ticket_e_name 
,race_date
,race_track_id
,race_track_j_name
,race_track_e_name
,race_number
,ticket_category_id
,ticket_category_j_name
,ticket_category_e_name
,ticket_selection_id
,ticket_selection_j_name
,ticket_selection_e_name
,amount_unit_id
,amount_unit_j_name
,amount_unit_e_name
,purchase_amount
,purchase_total_amount
,refund_amount
,select_item_id
,number1_flag
,number2_flag
,number3_flag
,number4_flag
,number5_flag
,number6_flag
,number7_flag
,number8_flag
,number9_flag
,number10_flag
,number11_flag
,number12_flag
,number13_flag
,number14_flag
,number15_flag
,number16_flag
,number17_flag
,number18_flag
)
as
select M1.user_id
,M1.betting_ticket_id
,M1.betting_ticket_j_name
,M1.betting_ticket_e_name
,M1.race_date
,M1.race_track_id
,D1.japanese_name
,D1.english_name
,M1.race_number
,M1.ticket_category_id
,D2.japanese_name
,D2.english_name
,M1.ticket_selection_id
,D3.japanese_name
,D3.english_name
,M3.amount_unit_id
,D4.japanese_name
,D4.english_name
,M3.purchase_amount
,M3.purchase_total_amount
,M3.refund_amount
,M2.select_item_id
,M2.number1_flag
,M2.number2_flag
,M2.number3_flag
,M2.number4_flag
,M2.number5_flag
,M2.number6_flag
,M2.number7_flag
,M2.number8_flag
,M2.number9_flag
,M2.number10_flag
,M2.number11_flag
,M2.number12_flag
,M2.number13_flag
,M2.number14_flag
,M2.number15_flag
,M2.number16_flag
,M2.number17_flag
,M2.number18_flag
from m_betting_ticket_info M1
inner join m_mark_horse_basic M2
on M2.user_id = M1.user_id
and M2.betting_ticket_id = M1.betting_ticket_id
inner join m_mark_amount_basic M3
on M3.user_id = M1.user_id
and M3.betting_ticket_id = M1.betting_ticket_id
left outer join d_racing_course D1
on D1.id = M1.race_track_id
left outer join d_ticket_category D2
on D2.id = M1.ticket_category_id
left outer join d_ticket_selections D3
on D3.id = M1.ticket_selection_id
left outer join d_amount_unit D4
on D4.id = M3.amount_unit_id
union all
select M1.user_id
,M1.betting_ticket_id
,M1.betting_ticket_j_name
,M1.betting_ticket_e_name
,M1.race_date
,M1.race_track_id
,D1.japanese_name
,D1.english_name
,M1.race_number
,M1.ticket_category_id
,D2.japanese_name
,D2.english_name
,M1.ticket_selection_id
,D3.japanese_name
,D3.english_name
,M3.amount_unit_id
,D4.japanese_name
,D4.english_name
,M3.purchase_amount
,M3.purchase_total_amount
,M3.refund_amount
,M2.select_item_id
,M2.number1_flag
,M2.number2_flag
,M2.number3_flag
,M2.number4_flag
,M2.number5_flag
,M2.number6_flag
,M2.number7_flag
,M2.number8_flag
,M2.number9_flag
,M2.number10_flag
,M2.number11_flag
,M2.number12_flag
,M2.number13_flag
,M2.number14_flag
,M2.number15_flag
,M2.number16_flag
,M2.number17_flag
,M2.number18_flag
from m_betting_ticket_info M1
inner join m_mark_horse_formation M2
on M2.user_id = M1.user_id
and M2.betting_ticket_id = M1.betting_ticket_id
inner join m_mark_amount_formation M3
on M3.user_id = M1.user_id
and M3.betting_ticket_id = M1.betting_ticket_id
left outer join d_racing_course D1
on D1.id = M1.race_track_id
left outer join d_ticket_category D2
on D2.id = M1.ticket_category_id
left outer join d_ticket_selections D3
on D3.id = M1.ticket_selection_id
left outer join d_amount_unit D4
on D4.id = M3.amount_unit_id
union all
select M1.user_id
,M1.betting_ticket_id
,M1.betting_ticket_j_name
,M1.betting_ticket_e_name
,M1.race_date
,M1.race_track_id
,D1.japanese_name
,D1.english_name
,M1.race_number
,M1.ticket_category_id
,D2.japanese_name
,D2.english_name
,M1.ticket_selection_id
,D3.japanese_name
,D3.english_name
,M3.amount_unit_id
,D4.japanese_name
,D4.english_name
,M3.purchase_amount
,M3.purchase_total_amount
,M3.refund_amount
,M2.select_item_id
,M2.number1_flag
,M2.number2_flag
,M2.number3_flag
,M2.number4_flag
,M2.number5_flag
,M2.number6_flag
,M2.number7_flag
,M2.number8_flag
,M2.number9_flag
,M2.number10_flag
,M2.number11_flag
,M2.number12_flag
,M2.number13_flag
,M2.number14_flag
,M2.number15_flag
,M2.number16_flag
,M2.number17_flag
,M2.number18_flag
from m_betting_ticket_info M1
inner join m_mark_horse_box M2
on M2.user_id = M1.user_id
and M2.betting_ticket_id = M1.betting_ticket_id
inner join m_mark_amount_box M3
on M3.user_id = M1.user_id
and M3.betting_ticket_id = M1.betting_ticket_id
left outer join d_racing_course D1
on D1.id = M1.race_track_id
left outer join d_ticket_category D2
on D2.id = M1.ticket_category_id
left outer join d_ticket_selections D3
on D3.id = M1.ticket_selection_id
left outer join d_amount_unit D4
on D4.id = M3.amount_unit_id;