import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
