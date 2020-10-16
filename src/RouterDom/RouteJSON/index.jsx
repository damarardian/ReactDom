import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import ProtectedRoute from "../Component/ProtectedRoute"
import ProtectedLogin from "../Component/ProtectedLogin";
import Login from "../Login/index"
import Register from "../Register/index";
const Index = () => {
  return (
    <BrowserRouter>
      <Switch>     
        <ProtectedRoute path="/admin" component={Layout} />
        <Redirect from="/" to="/admin/home" />
        <ProtectedRoute path="/login" component={Login} />        
        <ProtectedRoute path="/register" component={Register} />        
      </Switch>
    </BrowserRouter>
  );
};

export default Index;
