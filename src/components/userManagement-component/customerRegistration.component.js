import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'bootstrap';


export default class CustomerRegistration extends Component {

    constructor(props){
        super(props);

        this.onChangeCustomerfirstName= this.onChangeCustomerfirstName.bind(this);
        this.onChangeCustomerlastName= this.onChangeCustomerlastName.bind(this);
        this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
        this.onChangeCustomerPassword= this.onChangeCustomerPassword.bind(this);
        // this.onChangeToLogin= this.onChangeToLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            customers:[],
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }

    }


    onChangeCustomerfirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeCustomerlastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeCustomerEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeCustomerPassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    // onChangeToLogin() {
    //     this.props.history.push('/customer-signIn');
    // }


    onSubmit(e) {
        e.preventDefault();


            const customerDetails = {
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                password:this.state.password
            }
    
            console.log(customerDetails);
        
            axios.post('http://localhost:8280/customer/registration/', customerDetails)
              .then(res => alert(res.data));
        
            this.setState({
                firstName: '',
                lastName:'',
                email: '',
                password:''
            })
          
            //after registration success navigate to the login
             this.props.history.push('/welcome-customer');

    }


    render() {
        return (
            <div>
            <h3>Customer Registration form</h3>
            <br/>
            <form onSubmit={this.onSubmit}>
    
              <div className="form-group"> 
                <label>Customer first Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.onChangeCustomerfirstName}
                    />
              </div>
    
              <div className="form-group"> 
                <label>Customer last Name: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.onChangeCustomerlastName}
                    />
              </div>
    
              <div className="form-group"> 
                <label>Customer Email: </label>
                <input  type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeCustomerEmail}
                    />
              </div>
    
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangeCustomerPassword}
                    />
              </div>
    
              <div className="form-group">
                <input type="submit" value="SignUP" className="btn btn-primary" />
              </div>
            </form>
          </div>
        )
      }
    }

