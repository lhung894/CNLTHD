import React, {useState, useEffect} from 'react';
import "./chamcongnew.scss"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {InputAdornment} from "@material-ui/core";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from "axios";
import Nhanvien_Chamcong_Table from "../../components/datatable/Nhanvien_Chamcong_Table";
import MenuItem from "@mui/material/MenuItem";

const ChamCongNew = (props) =>
{
    let open = props.flag;
    const [res, setRes] = useState([]);
    const [ttcc, setTtcc] = useState([]);
    const [dlBD, setDlBd] = useState({
        trangThaiChamCongId: 1,
        ngayChamCong: ''
    });

    useEffect(async () =>
    {
        const listTT = await axios('http://localhost:8080/api/trangthaichamcong');
        const kqListTT = listTT.data.map(items =>
        {
            return {...items}
        });
        setTtcc(kqListTT);
    }, []);

    const handleClose = () =>
    {
        open = false;
        props.resetFlag(open);
    };

    const handleInputChange = (e) =>
    {
        const {name, value} = e.target;
        setDlBd(
            {
                ...dlBD, [name]: value,
            });

    };

    const getNvList = (listNv, listAPI) =>
    {
        console.log("Bấm ok ra là", listNv, listAPI);
        const temp = listAPI.filter(el =>
        {
            return listNv.find(element =>
            {
                return element.nhanVienId === el.nhanVienId;
            });
        });
        setRes(temp);
    }


    const thucthi = () =>
    {
        console.log("Cần kết hơp ", dlBD.trangThaiChamCongId, dlBD.ngayChamCong, res);
        // console.log(res);
        let a;
        if (dlBD.ngayChamCong.length > 0)
        {
            if (res.length > 0)
            {
                a = res.map(nhanVien => ({
                    nhanVien,
                    trangThaiChamCong: {trangThaiChamCongId: dlBD.trangThaiChamCongId},
                    ngayChamCong: dlBD.ngayChamCong
                }))
            } else
            {
                alert('Hãy chọn nhân viên chấm công!!😏😏')
            }

        } else
        {
            alert('Hãy chọn ngày chấm công 😭😭');
        }

        console.log("Kêt quả cúi cùng là ", a);
    }

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

    return (
        <Dialog open={open} onClose={handleClose} className="dialogCC" maxWidth="xl">

            <DialogTitle className="dialogTitleCC">Danh Sách Nhân Viên</DialogTitle>

            <DialogContent className="dialogContentCC">

                <div style={{
                    display: 'flex',
                    marginTop: '10px',
                    marginBottom: '10px',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'right'
                }}>
                    <div>
                        <TextField sx={{
                            input: {color: '#335371'},
                            width: '200px',
                            height: '50px'
                        }}
                                   id="filled-select-currency"
                                   select
                                   label="Trạng Thái Chấm Công"
                                   name="trangThaiChamCongId"
                                   value={dlBD.trangThaiChamCongId}
                                   onChange={handleInputChange}
                                   variant="outlined"
                        >
                            {ttcc.map((option) => (
                                <MenuItem key={option.trangThaiChamCongId} value={option.trangThaiChamCongId}>
                                    {matchTenTrangThai(option.tenTrangThai)}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                    <div>
                        <input className="ngaySinhCC"
                               type="date"
                               onChange={handleInputChange}
                               value={dlBD.ngayChamCong} name='ngayChamCong'/>
                    </div>
                </div>

                <Nhanvien_Chamcong_Table getNvList={getNvList}/>

            </DialogContent>

            <DialogActions className="dichuyenBtnCC">
                <div className="dichuyenCC">
                    <Button onClick={handleClose} className="cancelCC">Hủy</Button>
                    <Button
                        className="okCC" onClick={thucthi}>OK</Button>
                </div>
            </DialogActions>
        </Dialog>
    );


};

export default ChamCongNew;