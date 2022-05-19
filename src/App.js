import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import ViewMovieComponent from "./components/customer-components/all-movie-component";
import ViewOneMovie from "./components/customer-components/view-movie-component";
import ViewCart from "./components/customer-components/view-cart-component";
import TheaterOption from "./components/customer-components/theater-option-component";

//user management
import CustomerRegistration from "./components/userManagement-component/customerRegistration.component";
import CustomerLogin from "./components/userManagement-component/customerLogin.component";
import AdminLogin from "./components/userManagement-component/adminLogin.component";
import loginRegistrationUI from "./components/userManagement-component/loginRegistrationUI.component";

import adminRetrieve from './components/admin-components/admin-retrieve';
import adminInsert from './components/admin-components/admin-insert';
import adminUpdate from './components/admin-components/admin-update';
import HomePage from './components/user-components/HomePage';
import Navbar from './components/navbar.component';
import QrGencomponent from './components/admin-components/qr-gencomponent';

import successPage from "./components/payment_components/successPage";

<link rel="stylesheet" href="./" />;

function App() {
  var bgColors = { Blue: "#00B1E1", Lgrey: "darkgray" };
  return (
    <Router>
      <div style={{ backgroundColor: bgColors.Lgrey, height: "100%" }}>
        <Navbar />

        <div className="container" >
          <Route path="/home" exact component={HomePage} />
          <Route path="/admin-retrieve" component={adminRetrieve} />
          <Route path="/admin-insert" component={adminInsert} />
          <Route path="/admin-update/:id" component={adminUpdate} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/qrgen" component={QrGencomponent} />
            
          <Route path="/movie/view" component={ViewMovieComponent} />
          <Route path="/one-movie/view/:id" component={ViewOneMovie} />
          <Route path="/cart/view/" component={ViewCart} />
          <Route path="/theater-option/" component={TheaterOption} />

          <Route path="/payment-success" component={successPage} />

          {/* user management */}
          <Route
            path="/welcome-customer"
            exact
            component={loginRegistrationUI}
          />
          <Route
            path="/customer-signUp"
            exact
            component={CustomerRegistration}
          />
          <Route path="/customer-signIn" exact component={CustomerLogin} />
          <Route path="/admin-signIn" exact component={AdminLogin} />
        </div>
      </div>
    </Router>
  );
}

export default App;
