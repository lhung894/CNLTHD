import React, {useState} from 'react';

const RegisterFunc = () => {
    const [enteredName, setName] = useState('');
    const [enteredPhoneNumber, setPhoneNumber] = useState('');
    // const [userEntered, setUserEntered] = useState({
    //     enteredName: '',
    //     enteredPhoneNumber: '',
    // });

    const nameChange = (event) => {
        setName(event.target.value)
        // setUserEntered({
        //     ...userEntered,
        //     enteredName: event.target.value,
        // });
        // setUserEntered((prevState) => {
        //     return {...prevState, enteredName: event.target.value}
        // })
        // console.log(event.target.value)
    };

    const phoneNumberChange = (event) => {
        setPhoneNumber(event.target.value)
        // setUserEntered({
        //     ...userEntered,
        //     enteredPhoneNumber: event.target.value,
        // });
        // setUserEntered((prevState) => {
        //     return {...prevState, enteredPhoneNumber: event.target.value}
        // })
        // console.log(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()
        const data = {
            name: enteredName,
            phoneNumber: enteredPhoneNumber,
        }
        const validation = validationForm(data);
        if (validation.length === 0){
            alert("Submit success!")
        } else {
            alert(validation)
        }
        console.log(data)
    }

    const validationForm = (data) => {
        let error = "";
        if (data.name.match("^[(AÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶEÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢUÚÙỦŨỤƯỨỪỬỮỰYÝỲỶỸỴĐaáàảãạâấầẩẫậăắằẳẵặeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵđ|a-z|A-Z|\\s|'\"]{1,}$") == null) {
            error += "Tên không hợp lệ!"
        }
        if (data.phoneNumber.match("(84|0[3|5|7|8|9])+([0-9]{8})\\b") == null){
            error += "\nSố điện thoại không hợp lệ!";
        }
        return error;
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>Your name:</label>
                    <input type={"text"}
                           placeholder={"Enter your name..."}
                           onChange={nameChange}/>
                </div>
                <div>
                    <label>Your phone number:</label>
                    <input type={"number"}
                           placeholder={"Enter your phone..."}
                           onChange={phoneNumberChange}/>
                </div>
                <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default RegisterFunc;