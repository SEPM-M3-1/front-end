import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../Login';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
