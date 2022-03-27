import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoJsx from './components/DemoJsx/DemoJsx';
import reportWebVitals from './reportWebVitals';
import DemoComponentAPI from './components/DemoComponentAPI/DemoComponentAPI.tsx';
import DemoRefs from './components/DemoRefs/DemoRefs.js';
import DemoHOC from './components/DemoHOC/DemoHOC';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DemoJsx /> */}
    {/* <DemoComponentAPI/> */}
    {/* <DemoRefs/> */}
    <DemoHOC></DemoHOC>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
