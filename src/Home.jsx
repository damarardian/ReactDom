import React, {Component} from 'react'
import LogoImage from './img/logo.jpeg'
//import Siswa from './Components/Siswa'
//import SiswaRPL from './Components/SiswaRPL'
import LifeCycle from './Components/LifeCycle'
//import WebDesign from '.Components/WebDesign'

class Home extends Component
 {
     render(){
         return(
             <div className="container">
                 <img className="d-block mx-auto" src={LogoImage} height="100" alt="logo.jpeg"/>
                 <h4 className="text-center">Daftar siswa </h4>
                 <h4 className="text-center"><b>SMK MADINATULQURAN</b></h4>
                 <div>
                    <LifeCycle/>
                 </div>
             </div>
         )
     }
 }

 export default Home;
