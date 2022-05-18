import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import test from './components/test';
import ViewMovieComponent from './components/customer-components/all-movie-component';
import ViewOneMovie from './components/customer-components/view-movie-component';
import ViewCart from './components/customer-components/view-cart-component';
import TheaterOption from './components/customer-components/theater-option-component';

function App() {
  return (

    <Router>
      <div className="container">
        <Route path="/" exact component={test} />
        <Route path="/movie/view" component={ViewMovieComponent} />
        <Route path="/one-movie/view/:id" component={ViewOneMovie} />
        <Route path="/cart/view/" component={ViewCart} />
        <Route path="/theater-option/" component={TheaterOption} />
      </div>
    </Router>

  );
}

export default App;
