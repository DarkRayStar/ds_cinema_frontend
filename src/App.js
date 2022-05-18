import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import adminRetrieve from './components/admin-components/admin-retrieve';
import adminInsert from './components/admin-components/admin-insert';
import adminUpdate from './components/admin-components/admin-update';
import HomePage from './components/user-components/HomePage';
import Navbar from './components/navbar.component';

function App() {
  return (
    
      <Router>
        <div className="container">
          <Navbar/>
          <Route path="/admin-retrieve" exact component={adminRetrieve} />
          <Route path="/admin-insert" component={adminInsert} />
          <Route path="/admin-update/:id" component={adminUpdate} />
          <Route path="/home" component={HomePage} />
          </div>
      </Router>
    
  );
}

export default App;
