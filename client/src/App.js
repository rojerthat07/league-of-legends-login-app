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
      <h1>LEAGUE OF LEGENDS</h1>
      </Route>

      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
