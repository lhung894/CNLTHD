import React from 'react';
import "./thuongthangareachart.scss"
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
//import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const data = [
    {name: 'Tháng 1', uv: 4000},
    {name: 'Tháng 2', uv: 3000},
    {name: 'Tháng 3', uv: 2000},
    {name: 'Tháng 4', uv: 10000},
    {name: 'Tháng 5', uv: 1890},
    {name: 'Tháng 6', uv: 2390},
    {name: 'Tháng 7', uv: 3490},
    {name: 'Tháng 8', uv: 2587},
    {name: 'Tháng 9', uv: 1000},
    {name: 'Tháng 10', uv: 5478},
    {name: 'Tháng 11', uv: 3490},
    {name: 'Tháng 12', uv: 6872},
];
const ThuongThangAreaChart = () => {
    return (
        <div className="chart">
            <div className="title">TRONG 1 NĂM</div>
            <br/>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" stroke="gray"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
};

export default ThuongThangAreaChart;