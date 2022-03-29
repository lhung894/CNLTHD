import React from 'react';
import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const Widget = ({type}) => {

    let data;
    switch (type) {
        case "nhansu":
            data = {
                title: "TỔNG NHÂN VIÊN",
                counter: 100,
                link: "Xem tất cả",
                icon: (<PersonOutlinedIcon className="icon"
                                           style={{color: "crimson", backgroundColor: "rgba(230, 124, 124, 0.75)"}}/>)
            };
            break;
        case "phongban":
            data = {
                title: "TỔNG PHÒNG BAN",
                counter: 10,
                link: "Xem tất cả",
                icon: (<BusinessOutlinedIcon className="icon" style={{
                    color: "darkblue",
                    backgroundColor: "rgba(115, 169, 232, 0.84)"
                }}/>)
            };
            break;
        case "duan":
            data = {
                title: "TỔNG DỰ ÁN",
                counter: 20,
                link: "Xem tất cả",
                icon: (<AccountTreeOutlinedIcon className="icon" style={{
                    color: "forestgreen",
                    backgroundColor: "rgba(77, 199, 91, 0.9)"
                }}/>)
            };
            break;
        case "chamcong":
            data = {
                title: "TỔNG NGÀY LÀM",
                counter: 150,
                link: "Xem tất cả",
                icon: (<TimelapseOutlinedIcon className="icon" style={{
                    color: "orangered",
                    backgroundColor: "rgba(244, 173, 100, 0.87)"
                }}/>)
            };
            break;
        case "luong":
            data = {
                title: "TỔNG LƯƠNG",
                counter: 1000021210,
                link: "Xem tất cả",
                icon: (<PaidOutlinedIcon className="icon"
                                         style={{color: "rebeccapurple", backgroundColor: "rgba(164, 95, 227, 0.9)"}}/>)
            };
            break;
        default:
            break;
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="widget">

            <div className="left">
                <span className="title">
                    {data.title}
                </span>
                <span className="counter">
                    {numberWithCommas(data.counter)}
                </span>
                <span className="link">
                     {data.link}
                </span>
            </div>

            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon/>
                    20%
                </div>
                {data.icon}
                {/*<PersonOutlinedIcon />*/}
            </div>

        </div>
    );
};

export default Widget;