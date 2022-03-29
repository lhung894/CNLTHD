import React, {useState, useEffect} from 'react';
import "./nhanvientable.scss"
import {DataGrid, gridClasses} from '@mui/x-data-grid';
import axios from 'axios';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import NhanVienNew from "../../pages/new/NhanVienNew";
// import CongViecNew from "../../pages/new/CongViecNew";

const NhanVienTable = () => {
    const [value, setValue] = useState({
        flag: false,
        chitietnhanvien: {}
    });
    const [rows, setRows] = useState([]);
    const [chucNang, setChucNang] = useState(0);

    const resetFlag = (value) => {
        setValue(value);
    }
    console.log("ban đàu", value, rows);


    const columns = [
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
            field: 'tenPhongBan', headerName: 'Phòng Ban', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'tenChucVu', headerName: 'Chức Vụ', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'tenCongViec', headerName: 'Công Việc', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'ngayVaoLam', headerName: 'Ngày Vào Làm', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'luongCanBan', headerName: 'Lương Căn Bản', width: 200, headerAlign: 'center',
            align: 'center'
        },
        {
            field: 'control', headerName: 'Chức Năng', width: 300, headerAlign: 'center',
            align: 'center',
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/nhanvien/${params.row.nhanVien.nhanVienId}`}
                              state={
                                  {
                                      // nvID: `${params.row.nhanVienId}`,
                                      // nvHo: `${params.row.tenCongViec}`,
                                      // nvHeso: `${params.row.heSoCongViec}`,
                                      // nvStatus: `${params.row.status}`
                                      chiTiet: params.row
                                  }
                              }
                              thuoctinh={100}
                              style={{textDecoration: "none"}}>
                            <Button variant="outlined" className="view"
                            >Xem</Button>
                        </Link>

                        {/*<Button className="update" onClick={() => {*/}
                        {/*    return suaNhanVien(params.row)*/}
                        {/*}}>Sửa</Button>*/}

                        <Link to={`/nhanvien/edit/${params.row.nhanVien.nhanVienId}`}
                              state={
                                  {
                                      // nvID: `${params.row.nhanVienId}`,
                                      // nvHo: `${params.row.tenCongViec}`,
                                      // nvHeso: `${params.row.heSoCongViec}`,
                                      // nvStatus: `${params.row.status}`
                                      chiTiet: params.row, chucNang: chucNang
                                  }
                              }
                              thuoctinh={100}
                              style={{textDecoration: "none"}}>
                            <Button className="update">Sửa</Button>
                        </Link>


                        <Button className="delete" onClick={() => {
                            return xoaNhanVien(params.row)
                        }}>Xóa</Button>
                    </div>
                );
            },
        },
    ];


    useEffect(async () => {
        const result = await axios('http://localhost:8080/api/chitietnhanvien');

        let rowData = result.data.map(items => {
            return {
                id: items.nhanVien.nhanVienId,
                nhanVienId: items.nhanVien.nhanVienId,
                hoNhanVien: items.nhanVien.hoNhanVien,
                tenNhanVien: items.nhanVien.tenNhanVien,
                tenPhongBan: items.nhanVien.phongBan.tenPhongBan,
                tenChucVu: items.nhanVien.chucVu.tenChucVu,
                tenCongViec: items.nhanVien.congViec.tenCongViec,
                ngayVaoLam: items.nhanVien.ngayVaoLam,
                luongCanBan: items.nhanVien.luongCanBan,
                ...items
            }
        });
        console.log("Lấy đc từ API ", rowData);
        // rowData.push({id: 26, congViecId: 26, tenCongViec: 'g', heSoCongViec: 0.36, status: 1});
        setRows(rowData);
    }, []);

///////Thêm Nhân Viên
    const themNhanVien = () => {
        setChucNang(2);
        setValue({...value, flag: true});
        console.log("Dl cần thêm ", value);
    }

    const themData = (dlMoi) => {
        setRows((previous) => {
            return [...previous, {
                ...dlMoi,
                id: dlMoi.congViecId,
            }]
        });
        console.log("------------->", rows);
    }


/////Sửa Công Việc
    const suaNhanVien = (nv) => {
        console.log("dl lấy đc", nv);

        setChucNang(1);
        setValue({
            flag: true, ...nv
        });
    }

    const resetData = (dlmoi) => {
        let temp = rows.findIndex((obj => obj.congViecId === dlmoi.congViecId));
        console.log("Trước update!!: ", rows[temp]);
        rows[temp].tenCongViec = dlmoi.tenCongViec;
        rows[temp].heSoCongViec = dlmoi.heSoCongViec;
        console.log("SAu update: ", rows[temp])
        setRows(rows);
    }


///////////////Xóa Nhân Viên
    const xoaNhanVien = (nv) => {
        console.log("Lấy đc idNv là ", nv.nhanVien.nhanVienId);

        axios.put(`http://localhost:8080/api/nhanvien/remove/${nv.nhanVien.nhanVienId}`)
            .then(res => alert("Đã xóa nhân viên này!!"))
            .catch(err => alert(`Xóa thất bai!! ${err}`))
        // const newRows = rows.filter((a) => {
        //     if (a.nhanVien.nhanVienId === nv.nhanVien.nhanVienId) {
        //         console.log("tìm 0ngs!!")
        //         return false;
        //     }
        //     return true;
        // });
        // console.log("Dl mới là ", newRows);
        // setRows(newRows);
        setTimeout(() => {
            setRows((prevRows) => prevRows.filter((row) => row.nhanVien.nhanVienId !== nv.nhanVien.nhanVienId));
        })
    }

    return (
        <div className="datatable">

            <div className="addNew">
                {/*<Link to="/congviec/new" style={{textDecoration: "none"}}>*/}
                {/*</Link>*/}
                <Button className="link" onClick={themNhanVien}>Thêm</Button>
            </div>

            <DataGrid className="chinhmau"
                      rows={rows}
                      columns={columns}
                      pageSize={8}
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

        </div>
    );
};

export default NhanVienTable;