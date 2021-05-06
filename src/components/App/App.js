import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../Login';
import SignUpM from '../SignUpM';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signupm" component={SignUpM} />
      </Switch>
    </Router>
  );
}

export default App;
