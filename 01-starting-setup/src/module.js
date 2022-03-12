import "./module.css";

const Hello = (props) => {
   return (
      <div>
         <p className="hello"> {props.item}</p>
      </div>
   );
};

export default Hello;
