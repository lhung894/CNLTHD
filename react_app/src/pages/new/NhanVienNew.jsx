import React, {useState, useEffect} from 'react';
import "./nhanviennew.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from "axios";
import {useLocation} from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const NhanVienNew = () => {

    const location = useLocation();
    console.log("Dữ liệu lấy dơợc ", location.state.chiTiet, location.state.chucNang);

    // console.log("Dl của props", props.giatri, props.chucNang);
    //
    // let open = props.giatri.flag;
    let tenForm;
    location.state.chucNang === 0 ? tenForm = "Cập Nhật Nhân Viên" : tenForm = "Thêm Nhân Viên";



    const [dlBD, setDlBd] = useState(location.state.chiTiet);
    // if (props.giatri === 1)
    // {
    //     // setOpen(true);
    //     open = true;
    // }
    // setDlBd(props.giatri);

    // useEffect(() => {
    //     return setDlBd(props.giatri);
    // }, [props.giatri])

    console.log("dl ban 0ầu ", dlBD);

    // const handleClose = () => {
    //     const temp = {...props.giatri, flag: false};
    //     props.resetFlag(temp);
    // };

    // const handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     setDlBd(
    //         {
    //             ...dlBD, [name]: value,
    //         });
    //
    // };

    // const thucthi = (event) => {
    //     event.preventDefault();
    //     if (props.chucNang === 1) {
    //         const dlmoi = {
    //             congViecId: dlBD.congViecId,
    //             tenCongViec: dlBD.tenCongViec,
    //             heSoCongViec: dlBD.heSoCongViec,
    //             status: dlBD.status
    //         }
    //         console.log("Dl sau câp nhật", dlmoi);
    //         updateNV(dlmoi);
    //         props.resetData(dlmoi);
    //         handleClose();
    //     } else {
    //         alert("Them nè");
    //         const dlmoi = {
    //             tenCongViec: dlBD.tenCongViec,
    //             heSoCongViec: parseFloat(dlBD.heSoCongViec),
    //             status: 1
    //         }
    //         console.log("Dl vừa thêm", dlmoi);
    //         addNV(dlmoi);
    //         handleClose();
    //     }
    // }

    // const updateNV = (cv) => {
    //     // event.preventDefault();
    //     // const newCv = {...cv, status: 0};
    //     axios.put(`http://localhost:8080/api/congviec/${cv.congViecId}`, cv)
    //         .then(res => alert("Đã cập nhật công việc này!!"))
    //         .catch(err => alert(`Cập nhật  thất bai!! ${err}`))
    // }
    //
    // const addNV = (cv) => {
    //     axios.post("http://localhost:8080/api/congviec", cv).then(res => {
    //         // a = Object.assign(res.data);
    //         props.themData(res.data);
    //     }).then({}).catch(err => alert(`Thêm thất bài r huhu1!! ${err}`))
    // }


    return (
        <div className="singleNV">
            <Sidebar/>
            <div className="singleContainerNV">
                <Navbar/>
                <div className="topNV">
                    <div className="leftNV">
                        <h1 className="titleNV">{tenForm}</h1>

                        <Button variant="text" className="editBtnNV"
                                style={{maxWidth: "50px", maxHeight: "50px", minWidth: "30px", minHeight: "30px"}}>

                            <AutoFixHighIcon/>
                        </Button>

                        <div className="itemNV">
                            <img
                                src={require('../images/nv.jpg')}
                                alt="Công việc" className="itemImgNV"/>
                            <div className="detailsNV">
                                <div className="itemTitleNV">
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
                                <div className="itemKeyNV">
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

                                <div className="itemTitleNV">
                                    <li>Phòng Ban</li>
                                    <li>Chức Vụ</li>
                                    <li>Công Việc</li>
                                    <li>Ngày Vào Làm</li>
                                    <li>Lương Căn Bản</li>
                                </div>
                                <div className="itemKeyNV">
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

            </div>
        </div>
    );


};

export default NhanVienNew;