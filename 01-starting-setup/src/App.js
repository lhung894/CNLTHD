import React, { useState } from "react";
import Hello from "./module";
import Card from "./Card";
import Temp from "./Temp";

const App = () => {
   let temp = "hello";
   const [number, setNumber] = useState(100);
   const stateChange = () => {
      if (number == 200) {
         setNumber(100);
      } else {
         let tempNum = number + 1;
         setNumber(tempNum);
      }
   };

   const function1 = () => {
      return "shit";
   };

   return (
      <div>
         <Temp>
            <Card number1={number} number2={number} function1={stateChange}></Card>
            <Hello item="hello"></Hello>
         </Temp>
         <button onClick={stateChange}>Click</button>
      </div>
   );
};

export default App;
