import React from "react";
import { useParams , Link } from "react-router-dom";
import Axios from 'axios';
import {config} from '../config'

const DetailUser = (props) => {
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
      props.history.push(`/DetailUser/${nextId}`)   
    }

    const PrevHandle = () => {
      let prevId = parseInt(id, 10) - 1;
      props.history.push(`/DetailUser/${prevId}`)
    }

  return (
    <React.Fragment>
      <h3>Detail User {user.first_name}</h3>
      <div className="container">
        <img className="rounded-circle" src={user.avatar} alt=""/>
        <h3>{user.first_name} {user.last_name}</h3>
        <h4>{user.email}</h4>
        <div className="">      
          <button disabled={id < 2} onClick={PrevHandle}>Previous</button>
          <button onClick={NextHandle}>Next</button>   
        </div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      {/* <h4>cara 1: {id}</h4>
      <h4>cara 2: {props.match.params.id}</h4> */}
    </React.Fragment>
  );
};

export default DetailUser;