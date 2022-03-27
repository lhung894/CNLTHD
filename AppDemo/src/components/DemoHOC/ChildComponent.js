import React from 'react';

const ChildeComponet = ({order}) => {
  return (
    <>
      <div style={{border: "1px solid red", margin: "5px"}}>
        <p >This is child component. Number order: {order}</p>
      </div>
    </>
  );
};

export default ChildeComponet;
