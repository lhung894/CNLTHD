import ComponentChild from "./ComponentChild"



export default function ComponentParent(props){
          const receiveData = data => console.log("Data nhận được ",data)

             return(
                 <ComponentChild OnReceiveData = {receiveData} />
             )
}