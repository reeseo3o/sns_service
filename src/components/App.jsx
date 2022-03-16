import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/core.css';
import Login from './Login/Login';
import Join from './Join/Join';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/join" exact component={Join} />
      </Switch>
    </Router>
  );
}

export default App;
