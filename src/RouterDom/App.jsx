import React from 'react'
import "./Style.css";
import Navbar from "./Navbar"
import About from "./About/index"
import Contact from "./Contact/index"
import Home from "./Home/index"
import Login from "./Login/index"
import Register from "./Register/index";
import DetailUser from "./DetailUser/index"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute"

export default function App() {
    return(
        <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact />
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id">
            <Navbar>
              <DetailUser />
            </Navbar>
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
    );
}
