import Home from './pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/sign-in">
            <h2>Sign In Page</h2>
        </Route>
        <Route path="/sign-up">
            <h2>Sign Up Page</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
