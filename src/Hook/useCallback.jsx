import React from 'react'
import { useCallback } from 'react';
import { Fragment } from 'react';

const BelajaruseCallback = props => {
    const [kelas, setKelas] = React.useState([]);
    const jumlahKelas = React.useCallback (() => {
        return ["X TKJ ", "X RPL", "XI TKJ", "XI RPL",props.kelas];
    },[props.kelas]);

    React.useEffect(() =>{
        let data = jumlahKelas();
        setKelas(data);
        console.log("effect di panggil")
    }, [jumlahKelas]);
    
    return(
        <Fragment>
            <h1>Banyaknya kelas</h1>
            <ol>
                {kelas.map((kelas,) =>(
                    <li>{kelas}</li>
                ))}                
            </ol>
        </Fragment>
        
    )
}

export default BelajaruseCallback;