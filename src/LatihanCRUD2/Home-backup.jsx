import React, { Component, Fragment } from 'react'
import Axios from 'axios'
import AddEditUser from './Modal/AddEditUser'
import swal from "sweetalert";


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
      per_page: 5,
      total_pages: '',
      current_page: '',
      formName: '',
      userId: '',
      status: '',
      cari:'',

    }
  }

  handlerAdd() {
    this.componentDidMount()
  }

  onPreviosHandle = () => {
    console.log('tombol sudah diklik')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page - 1}`
    Axios
      .get(url)
      .then(response => {
        console.log('data berhasil didapatkan', response)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total_page: response.data.total_page,
          current_page: response.data.meta.current_page
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  onNextHandle = () => {
    console.log('tombol sudah diklik')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}?page=${this.state.current_page + 1}`
    Axios
      .get(url)
      .then(response => {
        console.log('data berhasil didapatkan', response)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total_page: response.data.total_page,
          current_page: response.data.meta.current_page
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  onSelectItem = (event) => {
    console.log("value", event.target.value)
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${event.target.value}`
    Axios
      .get(url)
      .then(response => {
        console.log('select item saat ini', response.data.meta.current_page)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total_page: response.data.total_page,
          current_page: response.data.meta.current_page
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateTable = () => {
    console.log('event sudah dijalankan')
    this.componentDidMount()
  }

  deleteTab = (event) => {
    event.preventDefault()
    const id_user = event.target.value
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id_user}`
    Axios
    .get(url)
    .then( response => {
      this.handlerAdd()
      swal("Berhasil!", "Data Kamu Telah Di hapus", "success");
    })
    .catch(error => {
      console.log('Failed', error);
    })
  }   

   onPost(url, payload){
      Axios
      .post(url, payload)
      .then(response => {
        // console.log('response', response.data.data.username)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total: response.data.meta.total_page,
          current_page: response.data.meta.current_page,
          last_page : response.data.meta.last_page
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

  onChangeSearch =(event) => {
    this.setState({[event.target.name] : event.target.value})
  }
  
  onSubmitSearch = (event) => {
    event.preventDefault()
    console.log('Submit')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/cari`
    const payload = {
      cari : this.state.cari
    }
    this.onPost(url,payload)
  }

  componentDidMount() {
    console.log('componentDidMount')
    const url = `https://belajar-react.smkmadinatulquran.sch.id/api/users/${this.state.per_page}`
    Axios
      .get(url)
      .then(response => {
        console.log('data berhasil didapatkan', response)
        this.setState({
          datas: response.data.data,
          per_page: response.data.meta.per_page,
          total_page: response.data.total_page,
          current_page: response.data.meta.current_page
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <h1 className="text-center">Latihan CRUD</h1>
          <div className="row">
            <div className="col-3">
              <button onClick={() => {
                this.setState({
                  formName: 'Form Registrasi',
                  status: 'Add',
                  userId: ''
                })
              }} type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal">
                Tambah akun
                </button>
            </div>
            <div className="col-3">
              <form onSubmit={this.onSubmitSearch}>
                  <input onChange={this.onChangeSearch} name="cari" id="cari" className="btn border" type="text" placeholder="Search.." autoComplete="off" aria-describedby="cari" />
              </form>
            </div>
          </div>
          <div className="row d-flex justify-content-end mb-3">
            <div className="col-1 col-sm-1 col-md-1 col-lg-1">
              <select onChange={this.onSelectItem} className="btn border">                
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
              {this.state.datas.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td><button onClick={() => {
                    this.setState({
                      formName: 'Form Update',
                      userId: data.id,
                      status: 'Update'
                    })
                  }} 
                  className="btn-primary btn" type="submit" data-toggle="modal" data-target="#exampleModal">Update</button></td>                  
                  <td><button 
                    className="btn-danger btn" 
                    type="submit"
                    value={data.id}                    
                    onClick={this.deleteTab}>
                      Hapus
                  </button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Page saat ini : {this.state.current_page}</h2>
          <div className="d-flex justify-content-end">
            <nav>
              <ul className="pagination">
                <li className="page-item"><button onClick={this.onPreviosHandle} className="page-link">Previous</button></li>
                <li className="page-item"><button onClick={this.onNextHandle} className="page-link">Next</button></li>
              </ul>
            </nav>
          </div>
        </div>
        {/*Modal*/}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <AddEditUser updateTable={this.updateTable} status={this.state.status} userId={this.state.userId} formName={this.state.formName} />
            </div>
          </div>
        </div>
        {/*Modal*/}
      </Fragment>
    )
  }
}
export default Home;