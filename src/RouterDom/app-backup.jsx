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
            <Navbar />
                <Switch>
                        <ProtectedRoute path="/" exact component={Home} />                                  
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/DetailUser/:id" component={DetailUser} />            
                        <Route path="/login" component={Login} />            
                        <Route path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
