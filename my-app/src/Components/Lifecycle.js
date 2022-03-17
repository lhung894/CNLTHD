
import React ,{Component} from "react"

class Lifecycle extends Component {
    constructor(props)
  {
    super(props);
     this.state = {
       date : new Date(),
       clickedStatus: false,
       list:[]
     };
  }
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      this.getList();
   }
  getList=()=>{
   /*** method to make api call***/
   fetch('http://api.ipapi.com/api/161.185.160.93?access_key =eee321ce7738b59eedcb5d76c30caed1')
      .then(response => response.json())
      .then(data => this.setState({ list:data }));
  }
   shouldComponentUpdate(nextProps, nextState){
     return this.state.list!==nextState.list
    }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component will update!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component did update!')
   }
   
  render() {
      return (
         <div>
            <h3>Mounting Lifecycle Methods</h3>
         </div>
      );
   }
}
export default Lifecycle;