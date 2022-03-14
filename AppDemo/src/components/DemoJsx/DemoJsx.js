import './DemoJsx.css';

function App() {
  return (
    <>
      <div className="main">
        <form className="mainForm">
          <div className="imgcontainer">
            <img src="https://thumbs.dreamstime.com/b/faces-avatar-circl…-illustration-eps-flat-cartoon-style-83654284.jpg" alt="Avatar" className="avatar"/>
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" defaultValue="" onChange={change}  required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" defaultValue="" onChange={change} required/>
                
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" defaultValue="" onChange={change}/> Remember me
            </label>
          </div>

          <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div> 
    </>
  );
}

function change(){}

export default App;
