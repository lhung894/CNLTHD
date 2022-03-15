import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoJsx from './components/DemoJsx/DemoJsx';
import reportWebVitals from './reportWebVitals';
import DemoComponentAPI from './components/DemoComponentAPI/DemoComponentAPI.tsx';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DemoJsx /> */}
    <DemoComponentAPI/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
