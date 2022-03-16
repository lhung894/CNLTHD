import React, { useState } from "react";
import Hello from "./module";
import Card from "./Card";
import Temp from "./Temp";
import OnTypeEx from "./OnTypeEx";

const App = () => {
   const [number, setNumber] = useState(100);
   const stateChange = () => {
      if (number == 200) {
         setNumber(100);
      } else {
         let tempNum = number + 1;
         setNumber(tempNum);
      }
   };

   return (
      <div>
         <Temp>
            <Card number1={number} number2={number} function1={stateChange}></Card>
            <Hello item="hello"></Hello>
            <span className="item-align">
               <button onClick={stateChange}>Click</button>
            </span>
         </Temp>

         <OnTypeEx></OnTypeEx>
      </div>
   );
};

export default App;
