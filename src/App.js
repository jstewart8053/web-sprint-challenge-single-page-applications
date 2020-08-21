import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./Home";
import Order from './Order'
import Nav from "./Nav";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/pizza'>
            <Order />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};
export default App;