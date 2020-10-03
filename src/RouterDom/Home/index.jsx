import React from "react";
import { config } from '../config'
import Axios from "axios";
import { Link } from "react-router-dom"

const Home = () => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users?page=1`);
      setList(response.data.data);
    } catch {
      console.log("error");
    }
  };
    
  return (
    <React.Fragment>
      <div className="container ">
        <table className="table table-responsive table-striped">
          <thead>
            <tr>
              <th>NO</th>
              <th>Detail</th>
              <th>Avatar</th>
              <th>email</th>
              <th>First_name</th>
              <th>Last_name</th>
            </tr>
          </thead> 
          <tbody>
            {list.map((list, index) => (
              <tr key={list.id}>
                <td>{index+1}</td>
                <td>
                  <Link to ={`DetailUser/${list.id}`}>
                    <p className="btn border button-outline">Detail</p>
                  </Link>
                </td>
                <td>
                  <img className="rounded-circle" src={list.avatar} height="50" alt=""/>
                </td>
                <td>{list.email}</td>
                <td>{list.first_name}</td>
                <td>{list.last_name}</td>
              </tr>
            ))}
          </tbody>         
        </table>
      </div>
    </React.Fragment>
  );
};

export default Home;