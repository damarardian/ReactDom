import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import swal from "sweetalert";

  const Home = () => {   

    const [data, setData] = React.useState([]);
    const [per_page, setPer_page] = React.useState(10);
    const [current_page, setCurrent_page] = React.useState(1);
    const [total, setTotal] = React.useState("");
    const [cari, setCari] = React.useState("");
    const [formName, setFormName] = React.useState("");
    const [userId, setUserId] = React.useState("");
    const [updateUser, setUpdateUser] = React.useState("add");
    //console.log(config.api_host);

    
      return (
        <Fragment>
          <div className="container mt-4">
            <h1 className="text-center">Latihan CRUD</h1>
            <div className="row">
              <div className="col-3">
                <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
                  Tambah akun
                  </button>
              </div>
              <div className="col-3">
                <form>
                    <input name="cari" id="cari" className="btn border" type="text" placeholder="Search.." autoComplete="off" aria-describedby="cari" />
                </form>
              </div>
            </div>
            <div className="row d-flex justify-content-end mb-3">
              <div className="col-1 col-sm-1 col-md-1 col-lg-1">
                <select className="btn border">                
                  <option value="5">5</option>                
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th></th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>             
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><button className="btn-primary btn" type="submit" data-toggle="modal" data-target="#exampleModal">Update</button></td>                  
                  <td>
                    <button className="btn-danger btn" type="submit">
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <nav>
                <ul className="pagination">
                </ul>
              </nav>
            </div>
          </div>
          {/*Modal*/}
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
              </div>
            </div>
          </div>
          {/*Modal*/}
        </Fragment>
      )    
  }

export default Home;