import React, { useState } from "react";
import Temp from "./Temp";
import "./OnTypeEx.css";

const OnTypeEx = (props) => {
   let temp = ["hello"];
   const [item, setItem] = useState([]);

   const [onChangeTextField, setOnChangeTextField] = useState("This text should be changed on typing");
   const [onSumbitTextField, setOnSumbitTextField] = useState("This text should be changed on submit");
   const [onOverTextField, setOnOverTextField] = useState("This text should be changed on hover");

   const onChange = (event) => {
      setOnChangeTextField(event.target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault();
      setOnSumbitTextField(onChangeTextField);

      setItem((previous) => {
         return [...previous, onChangeTextField];
      });
   };

   const onOver = () => {
      setOnOverTextField("Changed");
   };

   return (
      <div>
         <Temp>
            <form onSubmit={onSubmit}>
               <input type="text" onChange={onChange} placeholder="Type here"></input>
               <span>
                  <button type="submit">submit</button>
               </span>
            </form>
         </Temp>
         <Temp className="temp_display">
            <p className="text-color_on-change">{onChangeTextField}</p>
            <p className="text-color_on-submit">{onSumbitTextField}</p>
            <p onPointerOver={onOver} className="text-color_on-hover">
               {onOverTextField}
            </p>
         </Temp>
         <Temp className="temp_display">
            <h3>Submited Test:</h3>
            {item.map((item) => (
               <p>{item}</p>
            ))}
         </Temp>
      </div>
   );
};

export default OnTypeEx;
