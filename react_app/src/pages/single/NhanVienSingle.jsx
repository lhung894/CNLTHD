import React, {useEffect, useState} from 'react';
import "./nhanviensingle.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import Button from "@mui/material/Button";
import {Link, useLocation} from "react-router-dom";
// import axios from "axios";
// import Nhanvien_NhanVien_Table from "../../components/datatable/Nhanvien_NhanVien_Table";

const NhanVienSingle = () =>
{
    const location = useLocation();
    console.log("dsdsdsd", location.state.chiTiet);

    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <h1 className="title">Thông tin chi tiết</h1>

                        {/*<Button variant="text" className="editBtn"*/}
                        {/*        style={{maxWidth: "50px", maxHeight: "50px", minWidth: "30px", minHeight: "30px"}}>*/}
                        {/*    <ModeEditOutlineIcon/>*/}
                        {/*</Button>*/}

                        <div className="item">
                            <img
                                src={location.state.chiTiet.hinhAnh}
                                alt="Nhân viên " className="itemImg"/>
                            <div className="details">
                                <div className="itemTitle">
                                    <li>ID Nhân Viên</li>
                                    <li>Họ Tên Nhân Viên</li>
                                    <li>Ngày Sinh</li>
                                    <li>Giới Tính</li>
                                    <li>Số Điện Thoại</li>
                                    <li>Mail</li>
                                    <li>Nơi Sinh</li>
                                    <li>Địa Chỉ</li>
                                    <li>Căn Cước</li>
                                    <li>Ngày Cấp</li>
                                </div>
                                <div className="itemKey">
                                    <li>{location.state.chiTiet.nhanVien.nhanVienId}</li>
                                    <li>{location.state.chiTiet.nhanVien.hoNhanVien} {location.state.chiTiet.nhanVien.tenNhanVien}</li>
                                    <li>{location.state.chiTiet.ngaySinh}</li>
                                    <li>{location.state.chiTiet.gioiTinh === 1 ? "Nam" : "Nữ"}</li>
                                    <li>{location.state.chiTiet.sdt}</li>
                                    <li>{location.state.chiTiet.mail}</li>
                                    <li>{location.state.chiTiet.noiSinh}</li>
                                    <li>{location.state.chiTiet.diaChi}</li>
                                    <li>{location.state.chiTiet.canCuoc}</li>
                                    <li>{location.state.chiTiet.ngayCap}</li>
                                </div>

                                <div className="itemTitle">
                                    <li>Phòng Ban</li>
                                    <li>Chức Vụ</li>
                                    <li>Công Việc</li>
                                    <li>Ngày Vào Làm</li>
                                    <li>Lương Căn Bản</li>
                                </div>
                                <div className="itemKey">
                                    <li>{location.state.chiTiet.nhanVien.phongBan.tenPhongBan}</li>
                                    <li>{location.state.chiTiet.nhanVien.chucVu.tenChucVu}</li>
                                    <li>{location.state.chiTiet.nhanVien.congViec.tenCongViec}</li>
                                    <li>{location.state.chiTiet.nhanVien.ngayVaoLam}</li>
                                    <li>{location.state.chiTiet.nhanVien.luongCanBan}</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom">
                    <h1 className="title">Danh Sách Dự Án Tham Gia</h1>
                    {/*<Nhanvien_NhanVien_Table id={location.state.cvID}/>*/}
                </div>

            </div>
        </div>
    );
};

export default NhanVienSingle;