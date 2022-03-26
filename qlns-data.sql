use QLNS;
go

insert into chuc_vu (ten_chuc_vu, he_so_chuc_vu)
values ('chuc vu 1', 0.1),
('chuc vu 2', 0.2);

insert into cong_viec (ten_cong_viec, he_so_cong_viec)
values ('cong viec 1', 0.1),
('cong viec 2', 0.2);

insert into phong_ban (ten_phong_ban, sdt_phong_ban)
values ('phong ban 1', '0909090909'),
('phong ban 2', '0909040404');

insert into du_an (ten_du_an, ngay_bat_dau, ngay_ket_thuc, phan_tram_du_an, thuong_du_an)
values ('du an 1', '2021-12-01', '2021-12-31', 100.0, 6000000),
('du an 2', '2022-02-14', '2022-05-24', 100.0, 8000000);

insert into trang_thai_cham_cong (ten_trang_thai)
values ('1'),
('2'),
('3'),
('4');

insert into nhan_vien (ho_nhan_vien, ten_nhan_vien, ngay_vao_lam, luong_can_ban, phong_ban_id, chuc_vu_id, cong_viec_id)
values ('Duong','Kiet','2020-12-12',5000000,1,1,1),
('Tran','Kiet','2020-12-13',5000000,1,1,2),
('Lee','Hyung','2020-12-14',5000000,1,2,1),
('Key','Yong','2021-04-12',4500000,2,1,1),
('Ry','Fe','2021-08-07',4800000,2,2,2),
('Ao','Shi','2022-02-12',4000000,2,2,1);

insert into chi_tiet_nhan_vien (hinh_anh, sdt, mail, gioi_tinh, ngay_sinh, noi_sinh, dia_chi, can_cuoc, ngay_cap, nhan_vien_id)
values ('img1','0707070707','abc123@gmail.com',1,'2000-01-01','ABC123','ABC123','111111111','2016-01-01',1),
('img2','0303030303','abc456@gmail.com',1,'2000-02-02','ABC456','ABC456','222222222','2016-02-02',2),
('img3','0909070707','abc789@gmail.com',1,'2000-03-03','ABC789','ABC789','333333333','2016-03-03',3),
('img4','0202070707','def123@gmail.com',0,'2000-04-04','DEF123','DEF123','444444444','2018-04-04',4),
('img5','0101070707','def456@gmail.com',0,'2000-05-05','DEF456','DEF456','555555555','2017-05-05',5),
('img6','0606070707','def789@gmail.com',1,'2000-06-06','DEF789','DEF789','666666666','2017-06-06',6);

insert into cham_cong (ngay_cham_cong, nhan_vien_id, trang_thai_cham_cong_id)
values ('2022-01-01',1,1),
('2022-01-01',2,1),
('2022-01-01',3,1),
('2022-01-01',4,1),
('2022-01-01',5,1),
('2022-01-02',1,1),
('2022-01-02',2,3),
('2022-01-02',3,1),
('2022-01-02',4,2),
('2022-01-02',5,1),
('2022-02-20',1,1),
('2022-02-20',2,1),
('2022-02-20',3,1),
('2022-02-20',4,1),
('2022-02-20',5,1),
('2022-02-20',6,1),
('2022-02-22',1,1),
('2022-02-22',2,1),
('2022-02-22',3,1),
('2022-02-22',4,3),
('2022-02-22',5,2),
('2022-02-22',6,1),
('2022-03-14',1,1),
('2022-03-14',2,1),
('2022-03-14',3,1),
('2022-03-14',4,1),
('2022-03-14',5,1),
('2022-03-14',6,1),
('2022-03-17',1,1),
('2022-03-17',2,1),
('2022-03-17',3,1),
('2022-03-17',4,1),
('2022-03-17',5,2),
('2022-03-17',6,2);