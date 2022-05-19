import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import ViewMovieComponent from './components/customer-components/all-movie-component';
import ViewOneMovie from './components/customer-components/view-movie-component';
import ViewCart from './components/customer-components/view-cart-component';
import TheaterOption from './components/customer-components/theater-option-component';

import adminRetrieve from './components/admin-components/admin-retrieve';
import adminInsert from './components/admin-components/admin-insert';
import adminUpdate from './components/admin-components/admin-update';
import HomePage from './components/user-components/HomePage';
import Navbar from './components/navbar.component';

import successPage from './components/payment_components/successPage';

<link rel="stylesheet" href='./' />

function App() {

  var bgColors = { "Blue": "#00B1E1", "Lgrey": "LightGray" }
  return (

    <Router>
      <div>
        <Navbar />

        <div className="container" style={{ backgroundColor: bgColors.Lgrey }}>
          <Route path="/admin-retrieve" component={adminRetrieve} />
          <Route path="/admin-insert" component={adminInsert} />
          <Route path="/admin-update/:id" component={adminUpdate} />
          <Route path="/home" exact component={HomePage} />

          <Route path="/movie/view" component={ViewMovieComponent} />
          <Route path="/one-movie/view/:id" component={ViewOneMovie} />
          <Route path="/cart/view/" component={ViewCart} />
          <Route path="/theater-option/" component={TheaterOption} />

          <Route path="/payment-success" component={successPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
