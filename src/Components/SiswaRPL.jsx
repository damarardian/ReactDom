import React from 'react';

class SiswaRPL extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      namaDaftar : 'daftar Siswa RPL',
      namaSiswas : [
        {nama : 'hasan', kelas : '12', jurusan : 'RPL'},
        {nama : 'jooa', kelas : '12', jurusan : 'RPL'},
      ]
    }
  }

  onClickHandler = () => {
      //{event}
      console.log("ok tombol sduha di klik")
      this.setState({
        namaDaftar : 'daftar Siswa TKJ',
        namaSiswas : [
          {nama : 'hasan', kelas : '12', jurusan : 'TKJ'},
          {nama : 'bambank', kelas : '12', jurusan : 'TKJ'},
          {nama : 'bambank', kelas : '12', jurusan : 'TKJ'}
        ]
      })
  }

  render() {
    return (
      <div className="container">
        <button onClick={this.onClickHandler} className="form-control btn-success">ganti daftar</button>
        <h4 className="text-center">{this.state.namaDaftar}</h4>
        {this.state.namaSiswas.map((namaSiswa, index) => 
            <div className="card" key={index}>
                <img height="150" width="150" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F194%2F194938.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Favatar_194938&tbnid=Dl5d3HTt9BXSeM&vet=12ahUKEwjC4OG4oL_rAhUEMnIKHS4QCLgQMygCegUIARCvAQ..i&docid=aDz0Ujj_XaP4MM&w=512&h=512&q=avatar%20icon&safe=strict&client=firefox-b-d&ved=2ahUKEwjC4OG4oL_rAhUEMnIKHS4QCLgQMygCegUIARCvAQ" alt="43"/>
                <h5 className="card-title">{namaSiswa.nama}</h5>
                <p className="card-text">{namaSiswa.kelas}</p>
                <p className="card-text">{namaSiswa.jurusan}</p>
                <p>siswa ke {index +1}</p>
            </div>   

        )}
              
      </div>
    )
  }
}

export default SiswaRPL