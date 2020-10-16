import React from "react";
import { useParams , Link, useHistory } from "react-router-dom";
import Axios from 'axios';
import {config} from '../config'
import Navbar from "../Navbar";

const DetailUser = (props) => {
    let history = useHistory();
    let {id} = useParams();
    let [user, setUser] = React.useState([]);
    React.useEffect(() => {
      getUser();
    }, [id]);

    const getUser = async () => {
      try {
        let response = await Axios.get(`${config.api_host}/users/${id}`);
        setUser(response.data.data);
      } catch {
        console.log("error");
      }
    };

    const NextHandle = () => {
      let nextId = parseInt(id, 10) + 1;
      history.push(`/admin/DetailUser/${nextId}`)   
    }

    const PrevHandle = () => {
      let prevId = parseInt(id, 10) - 1;
      history.push(`/admin/DetailUser/${prevId}`)
    }

  return (
    <React.Fragment>
      <div>
        <Navbar/>
      </div>    
      <div className="container">          
        <div class="card text-center">
          <div class="card-header">
          {user.first_name}
          </div>
          <div class="card-body">
            <img className="rounded-circle" src={user.avatar} alt=""/>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <div className="d-flex justify-content-around ">      
              <button className="btn btn-info" disabled={id < 2} onClick={PrevHandle}>Previous</button>
              <button className="btn btn-info" disabled={id > 11} onClick={NextHandle}>Next</button>   
            </div>
            <Link to="/">
              <button className="btn btn-danger">Back</button>
            </Link>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>        
      </div>

      {/* <h4>cara 1: {id}</h4>
      <h4>cara 2: {props.match.params.id}</h4> */}
    </React.Fragment>
  );
};

export default DetailUser;