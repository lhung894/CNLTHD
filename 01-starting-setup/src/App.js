import React, { useEffect, useState } from "react";
import Hello from "./module";
import Card from "./Card";
import Temp from "./Temp";
import EventHandlerEx from "./EventHandlerEx";

const App = () => {
   const [number, setNumber] = useState(100);
   const [data, setData] = useState([]);
   const stateChange = () => {
      if (number == 200) {
         setNumber(100);
      } else {
         let tempNum = number + 1;
         setNumber(tempNum);
      }
   };

   const makeAPICall = async () => {
      const response = await fetch("http://localhost:8080/api/thisinhs", { mode: "cors" });
      const result = await response.json();
      setData(result);
      console.log(data);
   };

   return (
      <div>
         <Temp>
            <Card number1={number} number2={number} function1={stateChange}></Card>
            <Hello item="hello"></Hello>
            <span className="item-align">
               <button onClick={stateChange}>Click</button>
               <button onClick={makeAPICall}>CallAPI</button>
            </span>
         </Temp>
         <EventHandlerEx></EventHandlerEx>
         <Temp>
            <Temp className="temp_display">
               {data.map((data) => (
                  <p>{data.maThiSinh}</p>
               ))}
            </Temp>
         </Temp>
      </div>
   );
};

export default App;
