import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("this", isLoggedIn);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/Login" />
      }
    />
  );
}

export default ProtectedRoute;