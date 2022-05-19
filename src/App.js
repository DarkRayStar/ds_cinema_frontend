import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import test from './components/test';
import ViewMovieComponent from './components/customer-components/all-movie-component';
import ViewOneMovie from './components/customer-components/view-movie-component';
import ViewCart from './components/customer-components/view-cart-component';
import TheaterOption from './components/customer-components/theater-option-component';

//user management
import CustomerRegistration from './components/userManagement-component/customerRegistration.component';
import CustomerLogin from './components/userManagement-component/customerLogin.component';
import AdminLogin from './components/userManagement-component/adminLogin.component';
import loginRegistrationUI from './components/userManagement-component/loginRegistrationUI.component';

function App() {
  return (

    <Router>
      <div className="container">
        <Route path="/" exact component={test} />
        <Route path="/movie/view" component={ViewMovieComponent} />
        <Route path="/one-movie/view/:id" component={ViewOneMovie} />
        <Route path="/cart/view/" component={ViewCart} />
        <Route path="/theater-option/" component={TheaterOption} />

        {/* user management */}
        <Route path="/welcome-customer" exact component={loginRegistrationUI} />
        <Route path="/customer-signUp" exact component={CustomerRegistration} />
        <Route path="/customer-signIn" exact component={CustomerLogin} />
        <Route path="/admin-signIn" exact component={AdminLogin} />


      </div>
    </Router>

  );
}

export default App;
