import React from 'react';
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
// import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlinedIcon/>
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
                    <div className="item" style={{color:"#537895",fontWeight:"bold",fontSize:"15px"}}>
                        Xin Chào, Admin
                    </div>
                    <div className="item">
                        <img className="avatar"
                             src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/122145818_1721935137973387_1332276115306645951_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0UWGHn_-M_0AX__XOun&_nc_ht=scontent-hkg4-2.xx&oh=00_AT-smhMI4uUpZj2m8d5oF-CZE-eriN-sGtg_Uhjec8_zOQ&oe=625F8B09"
                             alt="Ảnh"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;