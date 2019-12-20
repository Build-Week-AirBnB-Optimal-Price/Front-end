import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

//components
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <h1>Welcome to our Air BnB Optimizer</h1>
        <h3>Test 123</h3>
      </header>
=======
      <Header />
      <Route path="/properties" component={LandingPage}></Route>
>>>>>>> 77149b7e91843710f196a93942f76e4f8468bbaf
    </div>
  );
}

export default App;
