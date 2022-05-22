import React, { Component } from "react";
import "./paymentSuccess.css";
import "./correct.png"
import QrGencomponent from "../admin-components/qr-gencomponent";

export default class successPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
        movies : sessionStorage.getItem('cart'),
    };
}

  render() {
    return (
      <div>
        <div class="container">
          <div class="row" style={{marginTop:'100px', height:'600px'}}>
            <div class="col-md-6 mx-auto mt-5">
              <div class="payment">
                <div class="payment_header">
                  <div class="check">
                  <img src={ require('./correct.png')} style={{width:'50px',height:'50px'}} alt="correct"/>
                  </div>
                </div>
                <div class="content">
                  <h1>Payment Success !</h1>
                  <p>
                    Thanks for your Booking. You will receive a payment confirmation after a while. Go to "My Tickets" Sections to view Purchased Tickets.
                  </p>
                  <QrGencomponent></QrGencomponent>
                  <a href="http://localhost:3000/home" style={{textDecoration: "none"}}>Go to Home</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }px
}
