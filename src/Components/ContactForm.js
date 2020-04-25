import React, { Component } from 'react'
import '../Css/ContactForm.css'

export default class ContactForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Name: "",
             Email: "",
             Mobile: "",
             Message: ""
        }
    }
    
    // handleName = (event) => {  
    //     this.setState({ Name: event.target.value })
    // }
    // handleEmail = (event) => {  
    //     this.setState({ Email: event.target.value })
    // }
    // handleMobile = (event) => {  
    //     this.setState({ Mobile: event.target.value })
    // }
    // handleMessage = (event) => {  
    //     this.setState({ Message: event.target.value })
    // }

    handleAll = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert (`my name is ${this.state.Name}. 
        My email id is ${this.state.Email}
        My mobile number is ${this.state.Mobile}.
        My message to your company is ${this.state.Message}
        `);
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable>Name:</lable> <br/>
                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleAll}/> <br/>

                    <lable>Email:</lable> <br/>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleAll}/> <br/>

                    <lable>Mobile No:</lable> <br/>
                    <input type="number" name="Mobile" value={this.state.Mobile} onChange={this.handleAll}/> <br/>

                    <lable>Message:</lable> <br/>
                    <textarea name="Message" value={this.state.Message} onChange={this.handleAll}/> <br/>

                    <input type="submit" value="Send" />
                </form>
            </div>
        )
    }
}

