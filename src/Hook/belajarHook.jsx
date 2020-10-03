import React, { Fragment } from "react";

const BelajarHook = () => {    
    const [counter, setCounter] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [array, setArray] = React.useState(['Ayam','Kijang','Kucing']);
    const [text, setText] = React.useState("");
    const [seconds, setSeconds] = React.useState(0);

    // useEffect 1 ~~ jika tidak memakai useEffect 2 maka text tidak akan disimpan di textbox ketika di reload
    React.useEffect(function(){
        if (text.length) localStorage.setItem("text", text);
        console.log("text di simpan");
    },[text]);

    //useEffect 2 
    React.useEffect(function(){
        setText(localStorage.getItem("text"));
        let Interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);
        return function () {
            clearInterval(Interval);
          };
        }, []);
    const  HandleTambah = () => {
        // setCounter ((counter) => counter + 1)
        setCounter((c) => c + 1);
        setLoading(true);
        setArray([...array, "Tikus"]); //maksud dari titik tiga adalah mencopy semua isi dari array
        // setCounter(counter + 1)
    };
    const HandleKurang = () => {        
        setCounter((c) => c -1);
        setLoading(false);
    }
    return(
        <Fragment>
            <div className="row">
                <div className="container text-center col-6">
                    <h1>Latihan useState</h1>               
                    <div className="d-flex justify-content-around mt-4 useState">
                        <button className=" btn btn-success" onClick={HandleTambah}>{loading ? "Loading" : "Tambah"}</button>
                        <h4>{counter}</h4>
                        <button className="btn btn-danger" onClick={HandleKurang}>Kurang</button>
                    </div>
                    <h3>Nama-nama hewan</h3>
                    <ol>
                        {array.map((hewan) => (
                            <li>{hewan}</li>
                        ))}
                    </ol>
                </div>                
                <div className=" col-6 container text-center useEffect">
                    <h1>Latihan useEffect</h1>
                    <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <h3>Waktu : {Math.floor(seconds / 60)} menit {seconds % 60} detik</h3>
                </div>
            </div>
        </Fragment>
    )
}

export default BelajarHook;