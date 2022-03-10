


export default function Welcomes(props){
    console.log(props)
    return( 
            <h1>Hello my name is {props.name} , i'm {props.age} years old now and i'm a {props.gender}</h1>
    );
}