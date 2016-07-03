import React, {Component} from 'react';
import { connect } from 'react-redux';
import {saveForm} from '../actions/CounterActions.js';

class CompanyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            number: '',
            email: '',
            registration: '',
            password: '',
            confirmPwd: ''
        }
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handleContactChange(event) {
        this.setState({number: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleRegistrationChange(event) {
        this.setState({registration: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleConfirmPasswordChange(event) {
        this.setState({confirmPwd: event.target.value});
    }

    onSave() {
        console.log("Hello World");
        const formDTO = {
            Name: this.state.name,
            Address: this.state.address,
            ContactNumber: this.state.number,
            EmailID: this.state.email,
            RegistrationNumber: this.state.registration,
            Password: this.state.password
        };
        //{"EmailID":"ajaygaur@servify.in","Name":"nikhil jain","Address":"shr e panjab andheri east","Password":"123456","RegistrationNumber":"asdfgh","ContactNumber":"8128749023"}
        console.log(formDTO);
        this.props.saveForm(formDTO);
    }

    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" value={this.state.value} onChange={this.handleNameChange.bind(this)}/>
                <br />
                <label>Address</label>
                <input type="text" value={this.state.value} onChange={this.handleAddressChange.bind(this)}/>
                <br />
                <label>Contact Number</label>
                <input type="text" value={this.state.value} onChange={this.handleContactChange.bind(this)}/>
                <br />
                <label>Email</label>
                <input type="text" value={this.state.value} onChange={this.handleEmailChange.bind(this)}/>
                <br />
                <label>Registration</label>
                <input type="text" value={this.state.value} onChange={this.handleRegistrationChange.bind(this)}/>
                <br />
                <label>Password</label>
                <input type="text" value={this.state.value} onChange={this.handlePasswordChange.bind(this)}/>
                <br />
                <label>Confirm Password</label>
                <input type="text" value={this.state.value} onChange={this.handleConfirmPasswordChange.bind(this)}/>

                <button onClick={this.onSave.bind(this)}>Submit</button>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {};
};

let mapDispatchToProps = dispatch => {
    return {
        saveForm: (formDTO) => {
            dispatch(saveForm(formDTO));
        }
    }
};

export default (connect(mapStateToProps, mapDispatchToProps)(CompanyForm));