import "./temp.css";
const Temp = (props) => {
   let className = props.className;
   return <div className={"temp " + className}>{props.children}</div>;
};

export default Temp;
