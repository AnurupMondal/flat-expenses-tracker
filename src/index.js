import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById('root')
);