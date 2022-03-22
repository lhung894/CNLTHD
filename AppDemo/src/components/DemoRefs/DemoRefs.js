import React, { useState, useEffect, useRef } from 'react';
import './DemoRefs.css';

const DemoRefs = () => {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  useEffect(()=>{
   renderCount.current =renderCount.current +1;
  })

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <p>Name is: {name}</p>
      <p>render {renderCount.current} times</p> 
    </>
  );
};

export default DemoRefs;
