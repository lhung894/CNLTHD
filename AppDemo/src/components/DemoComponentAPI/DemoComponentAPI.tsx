import React, { FC } from 'react';
import PropTypes from 'prop-types';
import './DemoComponentAPI.css';
import ReactDOM from 'react-dom';

class DemoComponentAPI extends React.Component<{}, { msg: string }> {
   private timeNow: Date;
   constructor(prop) {  
      super(prop);
      this.timeNow = new Date();        
      this.state = {  
            msg: `${this.timeNow.getHours()}:${this.timeNow.getMinutes()}:${this.timeNow.getSeconds()}`
      };      
      this.updateSetState = this.updateSetState.bind(this);
      this.forceUpdateState = this.forceUpdateState.bind(this);
      this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);  
      this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);      
   }  
   updateSetState() {
         this.timeNow = new Date();    
         this.setState({  
            msg: `${this.timeNow.getHours()}:${this.timeNow.getMinutes()}:${this.timeNow.getSeconds()}`
         });  
   }
   forceUpdateState() {  
      this.forceUpdate();  
   };
   findDomNodeHandler1() {  
      var myDiv1 = ReactDOM.findDOMNode(document.getElementById('myDivOne')) as HTMLElement;  
      myDiv1.style.color = 'red';  
  }  
  findDomNodeHandler2() {  
      var myDiv2 = ReactDOM.findDOMNode(document.getElementById('myDivTwo')) as HTMLElement;  
      myDiv2.style.color = 'blue';  
  }     
   render() {  
      return (  
         <div>  
            <div>
               <div className='title'>
                  <b>Demo setState method</b>
               </div>
               <h1 className='center'>{this.state.msg}</h1>  
               <button onClick = {this.updateSetState}>SET STATE</button> 
            </div>
            <hr></hr>
            <div>
               <div className='title'>
                  <b>Demo forceUpdate method</b>
               </div>
               <h3 className='center'>Random number: {Math.random()}</h3>  
               <button onClick = {this.forceUpdateState}>Force Update</button>  
            </div>
            <hr></hr>
            <div>
               <div className='title'>
                  <b>Demo findDOMNode method</b>
               </div>
               <div>   
                  <h3 className='center' id = "myDivOne">NODE1</h3>  
                  <h3 className='center' id = "myDivTwo">NODE2</h3>
                  <button onClick = {this.findDomNodeHandler1}>FIND_DOM_NODE1</button>  
                  <button onClick = {this.findDomNodeHandler2}>FIND_DOM_NODE2</button>   
               </div>  
            </div>
         </div>  
      );  
   }  
}  
export default DemoComponentAPI;  
