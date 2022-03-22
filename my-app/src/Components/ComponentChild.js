


export default function ComponentChild(props){
    return(
        <div>
            <button onClick={() => {
               
    
                props.onReceiveData('data gửi đi')
     
            }}>Gửi lại cho componentParent</button>
        </div>
      )
}