import React from 'react';
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import nv2 from '../navbar/nv2.jpg';

const Navbar = () =>
{
    let hinh=nv2;
    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="search">
                    {/*<input/>*/}
                    {/*<SearchOutlinedIcon/>*/}
                </div>

                <div className="items">
                    {/*<div className="item">*/}
                    {/*    <LanguageOutlinedIcon className="icon"/>*/}
                    {/*    VietNamese*/}
                    {/*</div>*/}
                    {/*<div className="item">*/}
                    {/*    <DarkModeOutlinedIcon className="icon"/>*/}
                    {/*</div>*/}
                    {/*<div className="item">*/}
                    {/*    <FullscreenExitOutlinedIcon className="icon"/>*/}
                    {/*</div>*/}
                    {/*<div className="item">*/}
                    {/*    <NotificationsOutlinedIcon className="icon"/>*/}
                    {/*    <div className="counter">*/}
                    {/*        1*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="item">*/}
                    {/*    <ChatBubbleOutlineOutlinedIcon className="icon"/>*/}
                    {/*    <div className="counter">*/}
                    {/*        2*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="item" style={{color: "#537895", fontWeight: "bold", fontSize: "15px"}}>
                        Xin Chào, Admin
                    </div>
                    <div className="item">
                        <img className="avatar"
                             src={nv2}
                             alt="Ảnh"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;