import React, { useState } from "react";
import Hello from "./module";
import Card from "./Card";
import Temp from "./Temp";
import EventHandlerEx from "./EventHandlerEx";
import List from "./List";

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

      // fetch("https://manga-scrapper-for-asura-scans-website.p.rapidapi.com/scrape/series/solo-leveling/chapter/170", {
      //    method: "PATCH",
      //    headers: {
      //       "content-type": "application/json",
      //       "x-rapidapi-host": "manga-scrapper-for-asura-scans-website.p.rapidapi.com",
      //       "x-rapidapi-key": "SIGN-UP-FOR-KEY",
      //    },
      //    body: {
      //       key1: "value",
      //       key2: "value",
      //    },
      // })
      //    .then((response) => {
      //       console.log(response);
      //    })
      //    .catch((err) => {
      //       console.error(err);
      //    });
   };

   return (
      <div>
         <Temp>
            <Card number1={number} number2={number} function1={stateChange}></Card>
            <Hello item="hello"></Hello>
            <span className="item-align">
               <button onClick={stateChange}>Click</button>
               {/* <button onClick={makeAPICall}>CallAPI</button> */}
            </span>
         </Temp>
         <EventHandlerEx></EventHandlerEx>
         <Temp className="temp_display">
            <h2>List:</h2>
            <List items={data} />
         </Temp>
      </div>
   );
};

export default App;
