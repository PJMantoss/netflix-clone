import Home from './pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
