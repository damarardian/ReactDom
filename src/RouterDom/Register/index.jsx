import React from "react";
import { Input, Button } from "../Property/Form";
import { Link } from "react-router-dom";
import Axios from 'axios'
import {config} from "../config"

const Register = (props) => {
    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");
    const onSubmit = (e) => {
      e.preventDefault();
      Post();
    };
    const Post = async () => {
      const url = `${config.api_host}/register`;
      const payload = {
        email: email,
        password: password
      };
  
      try {
        let response = await Axios.post(url, payload);
        localStorage.setItem("token", response.data.token);
        props.history.push("/");
      } catch (err) {}
    };
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-4 p-4">
            <h4>Silahkan Registrasi</h4>
            <form onSubmit={onSubmit}>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                label={"Email Address"}
                className="form-control"
              />
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                label={"Password"}
                value={password}
                className="form-control"
              />
              <Button
                className="form-control btn btn-success"
                label={"Register"}
              />
            </form>
            <Link to="/login">Back to login</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Register;
