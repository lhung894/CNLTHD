
import React from "react";

class State extends React.Component {
    constructor(props) {
      super(props);
      //Chỉ định một state
      this.state = { count: 1 };
    }
    render() {
        return (
          <div>
            <p>Giá trị {this.state.count}</p>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1
                })
              }}
            >
              Tăng
            </button>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count -1
                })
              }}
            >
              Giảm
            </button>
          </div>
        );
      }
  }
  export default State;