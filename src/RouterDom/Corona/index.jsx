import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Goback from "../HOC/goBack"

const Corona = () => {
    let Match = useRouteMatch();

    console.log(Match)
  return (
    <React.Fragment>
        <div className="container">
            <div className="">           
                <div className="d-flex justify-content-md-around">                    
                    <NavLink
                        activeStyle={{ fontWeight: "bold" ,color: "red"}}
                        to={`${Match.url}/positif`}> Data positif </NavLink>

                    <NavLink
                        activeStyle={{ fontWeight: "bold", color: "red" }}
                        to={`${Match.url}/sembuh`}> Data Sembuh </NavLink>

                    <NavLink
                        activeStyle={{ fontWeight: "bold", color: "red"}}
                        to={`${Match.url}/meninggal`}>Data Meninggal </NavLink>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <div>
                        <Switch>
                            <Route path="/corona/positif">
                                <h2>Data positif</h2>
                            </Route>
                            <Route path="/corona/sembuh">
                                <h2>Data sembuh</h2>
                            </Route>
                            <Route path="/corona/meninggal">
                                <h2>Data meninggal</h2>
                            </Route>            
                        </Switch> 
                    </div>                   
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <Goback/>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default Corona;
