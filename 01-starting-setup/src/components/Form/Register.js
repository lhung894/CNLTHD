import React, {Component} from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            phone : ''
        }
    }

    updateValue(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm(event) {
        //Chặn sự kiện mặc định của form
        event.preventDefault()
        const validation = this.validationForm();
        if (validation.length === 0){
            alert("Submit success!")
        } else {
            alert(validation)
        }
        console.log(this.state)
    }

    validationForm() {
        let error = "";
        if (this.state.name.match("^[(AÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶEÉÈẺẼẸÊẾỀỂỄỆIÍÌỈĨỊOÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢUÚÙỦŨỤƯỨỪỬỮỰYÝỲỶỸỴĐaáàảãạâấầẩẫậăắằẳẵặeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵđ|a-z|A-Z|\\s|'\"]{1,}$") == null) {
            error += "Tên không hợp lệ!"
        }
        if (this.state.phone.match("(84|0[3|5|7|8|9])+([0-9]{8})\\b") == null){
            error += "\nSố điện thoại không hợp lệ!";
        }
        return error;
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => {
                    this.submitForm(event)}}>
                    <div>
                        <label>Your name:</label>
                        <input type={"text"} name={"name"} placeholder={"Enter your name..."}
                               onChange={(event) => {this.updateValue(event)}}/>
                    </div>
                    <div>
                        <label>Your phone:</label>
                        <input type={"number"} name={"phone"} placeholder={"Enter your phone..."}
                               onChange={(event) => {this.updateValue(event)}}/>
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Register;