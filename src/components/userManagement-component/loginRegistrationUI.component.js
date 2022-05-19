import React, { Component } from 'react'

export default class loginRegistrationUI extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.registrationForm = this.registrationForm.bind(this);
        this.loginForm = this.loginForm.bind(this);

    }

    registrationForm(){
        this.props.history.push('/customer-signUp');
    }
    loginForm() {
        this.props.history.push('/customer-signIn');
    }

    render() {
        return (
            <div>
                <header class="section ">
                    <section class="full-width ">
                        <div className="row">

                            <br />
                            <h2 className="text-center"> Welcome </h2>
                            <br />
                           

                            <center>
                                
                                 <div>
                                    <button className="btn btn-primary" onClick={this.registrationForm}> SignUp </button>
                               
                                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.loginForm}> signIn</button>
                                </div>
                            </center>
                        </div>
                    </section>
                </header>

            </div>
        )
    }
}