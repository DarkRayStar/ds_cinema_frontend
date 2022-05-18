import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import test from './components/test';

function App() {
  return (
    
      <Router>
        <div className="container">
          <Route path="/" exact component={test} />
          </div>
      </Router>
    
  );
}

export default App;
