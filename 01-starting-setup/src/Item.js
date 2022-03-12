import React, { useState } from "react";
import Hello from "./module";
import Card from "./Card";
import Temp from "./Temp";

const Item = (props) => {
   const [number, setNumber] = useState(props.number);

   const stateChange = (number) => {
      number += 100;
      setNumber(number);
   };

   return (
      <div>
         <Temp>
            <Card number={number}></Card>
            <Hello item={props.item}></Hello>
            <button onClick={stateChange(props.number)}>Click</button>
         </Temp>
      </div>
   );
};

export default Item;
