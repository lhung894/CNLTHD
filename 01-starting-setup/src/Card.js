import propTypes from "prop-types";
import "./Card.css";

const Card = ({ number1, number2, function1 }) => {
   return <div className="Card">{number1 + number2}</div>;
};

Card.propTypes = {
   number1: propTypes.number,
   number2: propTypes.number,
   function1: (temp) => {
      console.log(temp);
      console.log("kasf;lkajsf");
   },
};

export default Card;
