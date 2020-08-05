import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './main.scss';

//Components
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
    <Router>
      <Switch>

      <Route path="/" exact>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">

  <a class="navbar-brand" href="#">Navbar</a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
</nav>
      </Route>

      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
