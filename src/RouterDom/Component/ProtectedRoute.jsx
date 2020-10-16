import React from "react";
// import { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(true); //ntar klo udh bisa buat register ganti ke false
  React.useMemo(() => {
    if (localStorage.getItem("token")){
      setAuth(true);
  }
  },[auth])
  return (
    <div>
      <Route {...rest}>{auth ? children : <Redirect to="/login" />}</Route>
    </div>
  );
};

export default ProtectedRoute;
