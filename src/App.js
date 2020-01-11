import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute.js";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import PropertyInfo from "./components/PropertyCard.js";

import { connect } from "react-redux";
import { login } from "./actions";

// i think we do an app level state check for login and render two different routers
function App(props) {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route
          path="/login"
          render={props => <LoginForm {...props} login={props.login} />}
        ></Route>
        <Route path="/register" component={Register}></Route>

        <PrivateRoute path="/user/:id" component={LandingPage}></PrivateRoute>
        <PrivateRoute path="/user/:id/:propertyid" component={PropertyInfo} />
      </Switch>
    </div>
  );
}

export default connect(null, { login })(App);
