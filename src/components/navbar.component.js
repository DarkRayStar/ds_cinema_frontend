import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  logout(){
    // console.log('b4',window.sessionStorage.getItem('loggeduser'));
    sessionStorage.removeItem('loggeduser');
    console.log('after-deleted',window.sessionStorage.getItem('loggeduser'));
    window.location='/'
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div style={{ paddingLeft:"650px" }}>
          <Link to="/" className="navbar-brand"> CINEPLEX CINEMA INC</Link>
        </div>
        <div className='container' style={{ paddingLeft:"570px" }}>
          <div>
          <button onClick={this.logout.bind(this)} className='btn btn-outline-light' >
            Logout
          </button>
          </div>
        </div>
      </nav>
    );
  }
}