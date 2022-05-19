import React, { Component } from 'react';
import axios from 'axios';

export default class AdminLogin extends Component {
  
    constructor(props){
        super(props);

        
        this.onChangeAdminEmail = this.onChangeAdminEmail.bind(this);
        this.onChangeAdminPassword= this.onChangeAdminPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            admins:[],
            email: '',
            password: ''
        }

    }

    componentDidMount(){
        this.setState({
            admins: ['Movie Admin','System Admin'],
            type: 'Movie Admin'
        });
    }

    onChangeAdminEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeAdminPassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();


            const empDetails = {
                email:this.state.email,
                password:this.state.password,
            }
    
            console.log(empDetails);
        
            axios.post('http://localhost:5050/admin/login/', empDetails)
              .then(res => alert(res.data));
        
            this.setState({
                email: '',
                password:''
            })

            //movie admin
            if(this.state.email === 'saduni@gmail.com'){
                 this.props.history.push('/movieAdminPage');
            }
            else if (this.state.email === 'sadun@gmail.com'){ //system admin
                this.props.history.push('/SystemAdminPage');
            }

    }


    render() {
        return (
            <div>
            <h3>Admin Login form</h3>
            <br/>
            <form onSubmit={this.onSubmit}>
    
              <div className="form-group"> 
                <label>Admin Email: </label>
                <input  type="email"
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeAdminEmail}
                    />
              </div>
    
              <div className="form-group"> 
                <label>Password: </label>
                <input  type="password"
                    required
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangeAdminPassword}
                    />
              </div>
    
              <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary" />
              </div> 
            </form>
          </div>
        )
      }
    }
