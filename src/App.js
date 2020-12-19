import React from 'react';
import {Home, Signin} from './pages';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
            <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
            <Signin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
            <h2>Sign Up Page</h2>
        </Route>
        <Route path={ROUTES.BROWSE}>
            <h2>Browse Page</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
