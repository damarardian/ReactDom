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
import ProtectedLogin from "./Component/ProtectedLogin";
import NotFound from "./NotFound/index"
import Corona from "./Corona/index"

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
          <Route path="/DetailUser/:id" component={DetailUser} />            
          <Route path="/corona">
            <Navbar>
              <Corona />
            </Navbar>
          </Route>
          <ProtectedLogin path="/login" component={Login} />
          <ProtectedLogin path="/register" component={Register} />
          <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
    );
}
