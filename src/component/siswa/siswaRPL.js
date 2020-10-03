import React from 'react'

const SiswaRPL = (props) => {
    return(
        <div>           
            <table className="table table-borderless">
                <tr>
                <th>Name</th>
                <td>:</td>
                <td>{props.namaSiswa}</td>
                </tr>
                <tr>
                <th>NISN</th>
                <td>:</td>
                <td>{props.nisnSiswa}</td>
                </tr>
                <tr>
                <th>jurusan</th>
                <td>:</td>
                <td>RPL</td>
                </tr>
            </table>
        </div>
    )
}
export default SiswaRPL