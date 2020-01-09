import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import PropertyPage from "./components/PropertyPage.js";
import About from "./components/About.js";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import AnalyzationForm from "./components/AnalyzationForm";


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/properties" component={PropertyPage}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/analysis" component={AnalyzationForm}></Route>
    </div>
  );
}

export default App;
