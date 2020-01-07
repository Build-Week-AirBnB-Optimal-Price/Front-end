import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import About from "./components/About.js";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );
}

export default App;
