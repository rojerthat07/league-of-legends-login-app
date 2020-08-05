import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.scss";

//Components
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SuccessfulRegister from "./components/SuccessfulRegister";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navigation></Navigation>
          </Route>

          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>

          <Route
            path="/successfulregistration"
            component={SuccessfulRegister}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
