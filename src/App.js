import React from 'react';
import {Home, Browse, Signin, Signup} from './pages';
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
            <Signup />
        </Route>
        <Route path={ROUTES.BROWSE}>
            <Browse Page />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
