import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


import ViewOneMovie from "./components/customer-components/view-movie-component";
import ViewCart from "./components/customer-components/view-cart-component";
import PaidPage from "./components/payment_components/paidPage";

//user management
import CustomerRegistration from "./components/userManagement-component/customer/registration/customerRegistration.component";
import CustomerLogin from "./components/userManagement-component/customer/login/customerLogin.component";
import AdminLogin from "./components/userManagement-component/admin/adminLogin.component";

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

          <Route path="/" exact component={CustomerLogin} />

          <Route path="/home" component={HomePage} />
          <Route path="/admin-retrieve" component={adminRetrieve} />
          <Route path="/admin-insert" component={adminInsert} />
          <Route path="/admin-update/:id" component={adminUpdate} />
          <Route path="/qrgen" component={QrGencomponent} />

          <Route path="/one-movie/view/:id" component={ViewOneMovie} />
          <Route path="/cart/view/" component={ViewCart} />

          <Route path="/payment-success" component={successPage} />
          <Route path="/payment-paid" component={PaidPage} />

          {/* user management */}
          <Route path="/customer-signIn" component={CustomerLogin} />
          <Route path="/customer-signUp" component={CustomerRegistration} />
          <Route path="/admin-signIn" component={AdminLogin} />
        </div>
      </div>
    </Router>
  );
}

export default App;
