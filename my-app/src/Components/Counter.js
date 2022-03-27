import React from "react"
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      //Bind this
      this.increment = this.increment.bind(this)
      this.decrement = this.decrement.bind(this)
    }
    //Hàm này sẽ TĂNG giá trị của số
    increment() {
      this.setState({
        count: this.state.count + 1,
      });
    }
    //Hàm này sẽ GIẢM giá trị của số
    decrement() {
      this.setState({
        count: this.state.count - 1,
      });
    }
    render() {
    return <div>{
      //Trả về giá trị cho props render. 
      this.props.render({
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      })  
    }</div>;
    }
  }