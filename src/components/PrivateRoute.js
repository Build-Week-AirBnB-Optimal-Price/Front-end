import React from "react";
import { Route, Redirect } from "react-router-dom";

// requirements for this component:
// 1. needs to have the same API (interface) as <Route/>
// 2. it renders a <Route /> and passes all props through to it
// 3. it checks to see if we are authenticated. if not redirect
//    to login. if is authed, render the component prop

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;