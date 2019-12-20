import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/properties" component={LandingPage}></Route>
      <Route path="/login" component={LoginForm}></Route>
    </div>
  );
}

export default App;
