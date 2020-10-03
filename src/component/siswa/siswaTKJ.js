import React, {component, Component} from 'react'

class SiswaTKJ extends Component{
    render(){
        return(
            <div>
                <table className="table table-borderless">
                    <tr>
                    <th>Name</th>
                    <td>:</td>
                    <td>{this.props.namaSiswa}</td>
                    </tr>
                    <tr>
                    <th>NISN</th>
                    <td>:</td>
                    <td>{this.props.nisnSiswa}</td>
                    </tr>
                    <tr>
                    <th>jurusan</th>
                    <td>:</td>
                    <td>TKJ</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default SiswaTKJ