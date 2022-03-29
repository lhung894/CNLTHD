import React from 'react';
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import ThuongThangAreaChart from "../../components/chart/ThuongThangAreaChart";

const Home = () => {

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>

                <div className="widgets">
                    <Widget type="nhansu"/>
                    <Widget type="phongban"/>
                    <Widget type="duan"/>
                    <Widget type="chamcong"/>
                    <Widget type="luong"/>
                </div>

                <div className="charts">
                    <ThuongThangAreaChart aspect={2}/>
                </div>
            </div>
        </div>
    );
};

export default Home;