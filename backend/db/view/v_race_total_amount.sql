create view v_race_total_amount
(user_id
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
,purchase_total_amount
,refund_total_amount
)
as
select M1.user_id
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
,sum(S2.purchase_total_amount)
,sum(S2.refund_amount)
from m_betting_ticket_info M1
inner join (
    select S1.user_id
    ,S1.betting_ticket_id
    ,S1.purchase_total_amount
    ,S1.refund_amount
    from (
        select M2.user_id user_id
        ,M2.betting_ticket_id betting_ticket_id
        ,sum(M2.purchase_total_amount) purchase_total_amount
        ,sum(M2.refund_amount) refund_amount
        from m_mark_amount_basic M2
        group by M2.user_id, M2.betting_ticket_id
        union all
        select M3.user_id user_id
        ,M3.betting_ticket_id betting_ticket_id
        ,sum(M3.purchase_total_amount) purchase_total_amount
        ,sum(M3.refund_amount) refund_amount
        from m_mark_amount_box M3
        group by M3.user_id, M3.betting_ticket_id
        union all
        select M4.user_id user_id
        ,M4.betting_ticket_id betting_ticket_id
        ,sum(M4.purchase_total_amount) purchase_total_amount
        ,sum(M4.refund_amount) refund_amount
        from m_mark_amount_formation M4
        group by M4.user_id, M4.betting_ticket_id) S1
) S2
on S2.user_id = M1.user_id
and S2.betting_ticket_id = M1.betting_ticket_id
left outer join d_racing_course D1
on D1.id = M1.race_track_id
left outer join d_ticket_category D2
on D2.id = M1.ticket_category_id
left outer join d_ticket_selections D3
on D3.id = M1.ticket_selection_id
group by M1.user_id
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