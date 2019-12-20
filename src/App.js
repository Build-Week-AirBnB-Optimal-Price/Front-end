import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/properties" component={LandingPage}></Route>
      <Route path="/register" component={Register}></Route>
    </div>
  );
}

export default App;
