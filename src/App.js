import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import LandingPage from "./components/LandingPage.js";
import About from "./components/About.js";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/properties" component={LandingPage}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );
}

export default App;
