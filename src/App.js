import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import { connect } from 'react-redux';
import { login } from './actions'


function App(props) {
  props.login('david')
  console.log(props)
  return (
    <div className="App">
      <Header />
      <Route path="/properties" component={LandingPage}></Route>
      <Route path="/login" render={props => <LoginForm {...props} login={props.login} />}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );
}

export default connect(null, { login })(App);
