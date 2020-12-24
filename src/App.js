import React from 'react';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { useAuthListener } from './hooks';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
            <Home />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Signin />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
            <Browse Page />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
