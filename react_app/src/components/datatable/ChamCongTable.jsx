import React, {useState, useEffect} from 'react';
import "./chamcongtable.scss"
import {DataGrid, gridClasses} from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import CongViecNew from "../../pages/new/CongViecNew";
import ChamCongNew from "../../pages/new/ChamCongNew";

const ChamCongTable = () =>
{
    // const [value, setValue] = useState({
    //     flag: false,
    //     dlCV: {
    //         id: 0,
    //         idCv: '',
    //         tenCv: '',
    //         hsCv: '',
    //         statusCV: 1
    //     }
    // });
    // const [chucNang, setChucNang] = useState(0);

    const [flag, setFlag] = useState(false);
    const [rows, setRows] = useState([]);
    console.log("ban đàu", flag, rows);

    const resetFlag = (value) =>
    {
        setFlag(value);
    }

    const columns = [
        {
            field: 'chamCongId', headerName: 'Chấm Công ID', width: 150, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'nhanVienId', headerName: 'Nhân Viên ID', width: 150, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'hoNhanVien', headerName: 'Họ Nhân Viên', width: 150, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'tenNhanVien', headerName: 'Tên Nhân Viên', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'ngayChamCong', headerName: 'Ngày Chấm Công', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'tenTrangThai', headerName: 'Trạng Thái', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'control', headerName: 'Chức năng', width: 250, headerAlign: 'center',
            align: 'center',
            renderCell: (params) =>
            {
                return (
                    <div className="cellAction">
                        <Button className="update" onClick={() =>
                        {
                            // return suaCongViec(params.row)
                        }}>Sửa</Button>

                        <Button className="delete" onClick={() =>
                        {
                            // return xoaCongViec(params.row)
                        }}>Xóa</Button>
                    </div>
                );
            },
        },
    ];


    useEffect(async () =>
    {
        const result = await axios('http://localhost:8080/api/chamcong');

        let rowData = result.data.map(items =>
        {
            return {
                id: items.chamCongId,
                chamCongId: items.chamCongId,
                nhanVienId: items.nhanVien.nhanVienId,
                hoNhanVien: items.nhanVien.hoNhanVien,
                tenNhanVien: items.nhanVien.tenNhanVien,
                ngayChamCong: items.ngayChamCong,
                tenTrangThai: matchTenTrangThai(items.trangThaiChamCong.tenTrangThai),
                ...items
            }
        });
        console.log("Lấy đc từ API ", rowData);

        setRows(rowData);
    }, []);

    const matchTenTrangThai = (id) =>
    {
        // let tentt;
        switch (id)
        {
            case '1':
                return "Đi làm";
            case '2':
                return "Nghỉ có phép";
            case '3':
                return "Nghỉ không phép";
        }
    }

    //// Cấp phát
    const capPhatCC = () =>
    {
        axios.post("http://localhost:8080/api/chamcong/capphat").then(res =>
        {
            let rowData = res.data.map(items =>
            {
                return {
                    id: items.chamCongId,
                    chamCongId: items.chamCongId,
                    nhanVienId: items.nhanVien.nhanVienId,
                    hoNhanVien: items.nhanVien.hoNhanVien,
                    tenNhanVien: items.nhanVien.tenNhanVien,
                    ngayChamCong: items.ngayChamCong,
                    tenTrangThai: matchTenTrangThai(items.trangThaiChamCong.tenTrangThai),
                    ...items
                }
            });
            // for (let item of rowData)
            // {
            //     setRows((previous) =>
            //     {
            //         return [...previous, item]
            //     })
            // }
            setRows((preState) => [...preState, ...rowData])
        }).then(`OK`).catch(err => alert(`Thêm thất bài r huhu1!! ${err}`))
        console.log("------------->", rows);
    }

/////Thêm Chấm Công
    const themChamCong = () =>
    {
        setFlag(true);
        console.log("Cờ sau đổi ", flag);
    }

    const themData = (dlMoi) =>
    {
        let rowData = dlMoi.map(items =>
        {
            return {
                id: items.chamCongId,
                chamCongId: items.chamCongId,
                nhanVienId: items.nhanVien.nhanVienId,
                hoNhanVien: items.nhanVien.hoNhanVien,
                tenNhanVien: items.nhanVien.tenNhanVien,
                ngayChamCong: items.ngayChamCong,
                tenTrangThai: matchTenTrangThai(items.trangThaiChamCong.tenTrangThai),
                ...items
            }
        });
        setRows((preState) => [...preState, ...rowData])
        console.log("------------->",rows);
    }


/////Sửa Công Việc
//     const suaCongViec = (cv) =>
//     {
//         console.log("dl lấy đc", cv);
//         setChucNang(1);
//         setValue({
//             flag: true, ...cv
//         });
//     }
//
//     const resetData = (dlmoi) =>
//     {
//         let temp = rows.findIndex((obj => obj.congViecId === dlmoi.congViecId));
//         console.log("Trước update!!: ", rows[temp]);
//         rows[temp].tenCongViec = dlmoi.tenCongViec;
//         rows[temp].heSoCongViec = dlmoi.heSoCongViec;
//         console.log("SAu update: ", rows[temp])
//         setRowData(rows);
//     }


///////////////Xóa Công Việc
//     const xoaCongViec = (cv) =>
//     {
//         console.log("Lấy đc idCV là ", cv);
//         ktraCV(cv);
//     }
//
//     const ktraCV = async (cv) =>
//     {
//         const result = await axios.get(
//             `http://localhost:8080/api/congviec/nvcongviec/${cv.congViecId}`);
//         const rowData = result.data.map(items =>
//         {
//             return {
//                 id: items.nhanVienId,
//                 nhanVienId: items.nhanVienId,
//                 hoNhanVien: items.hoNhanVien,
//                 tenNhanVien: items.tenNhanVien,
//                 ngayVaoLam: items.ngayVaoLam,
//                 tenPhongBan: items.phongBan.tenPhongBan,
//                 tenChucVu: items.chucVu.tenChucVu,
//                 status: items.status
//             }
//         });
//         // console.log(rowData.length);
//         {
//             rowData.length > 0 ? alert("Bạn không thể xóa công việc có nhân viên đang làm!!") : xoaCV(cv)
//         }
//     }
//
//     const xoaCV = (cv) =>
//     {
//         // event.preventDefault();
//         // const newCv = {...cv, status: 0};
//         axios.put(`http://localhost:8080/api/congviec/remove/${cv.congViecId}`, cv)
//             .then(res => alert("Đã xóa công việc này!!"))
//             .catch(err => alert(`Xóa thất bai!! ${err}`))
//         const newRows = rows.filter((a) =>
//         {
//             if (a.congViecId === cv.congViecId)
//             {
//                 return false;
//             }
//             return true;
//         });
//         console.log("Dl mới là ", newRows);
//         setRowData(newRows);
//     }


    return (
        <div className="datatable">
            <div className="addNew">
                {/*<Link to="/congviec/new" style={{textDecoration: "none"}}>*/}
                {/*</Link>*/}
                <Button className="link" style={{marginRight: '10px'}} onClick={capPhatCC}>Cấp phát</Button>
                <Button className="link" onClick={themChamCong}>Thêm</Button>
            </div>

            <DataGrid className="chinhmauCC"
                      rows={rows}
                      columns={columns}
                      pageSize={16}
                      rowsPerPageOptions={[100]}
                      isRowSelectable={() => false}
                      sx={{
                          boxShadow: 2,

                          "& .MuiDataGrid-columnHeaders": {
                              backgroundColor: '#09203f',
                              backgroundImage: 'linear-gradient(250deg, #537895 15%, #32516F 60%)',
                              fontSize: 16,
                              color: '#ffffff',
                              borderRadius: 2
                          },

                          "& .MuiDataGrid-row": {
                              color: '#32516F',
                              fontWeight: 'bold',
                              fontSize: 16,

                              "&:nth-of-type(n)": {
                                  backgroundColor: 'white',
                                  "&:hover": {
                                      backgroundColor: 'rgba(184,198,219,0.87)'
                                  }
                              },
                              "&:nth-of-type(2n)": {
                                  backgroundColor: 'rgba(215,222,238,0.47)',
                                  "&:hover": {
                                      backgroundColor: 'rgba(184,198,219,0.87)'
                                  }
                              }
                          }
                      }}
            />

            {/*{console.log("ban đàu dã render", value)}*/}
            <ChamCongNew flag={flag} resetFlag={resetFlag} themData={themData}/>

        </div>
    );
};

export default ChamCongTable;