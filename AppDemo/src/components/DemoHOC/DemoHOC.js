import React from 'react';
import ChildeComponet from './ChildComponent';
import './DemoHOC.css';

const DemoHOC = () => {
  return (
    <>
      <div style={{border: '1px solid blue'}}>
        <p>This is parent component and reuse child component four time.</p>
        <ChildeComponet order={1}></ChildeComponet>
        <ChildeComponet order={2}></ChildeComponet>
        <ChildeComponet order={3}></ChildeComponet>
        <ChildeComponet order={4}></ChildeComponet>
      </div>
    </>
  );
};

export default DemoHOC;
