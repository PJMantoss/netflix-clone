import React from 'react';
import Home from './pages/Home';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/signin">
            <h2>Sign In Page</h2>
        </Route>
        <Route path="/signup">
            <h2>Sign Up Page</h2>
        </Route>
        <Route path="/browse">
            <h2>Browse Page</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
