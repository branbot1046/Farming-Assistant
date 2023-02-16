import React from 'react'
import logo4 from './imgs/Logo4.png'
import {Link} from 'react-router-dom'
import 'bootstrap'
export default function NavBar_M(){
  let user = sessionStorage.getItem("usuario")
  let msg = "";
  if(user !== ""){
    msg = "Bienvenido, " + user;
  }
    return(

<nav className="navbar navbar-expand-sm navbar-light bg-lignt" id="nav_m">
    
    <Link className="navbar-brand" to="/Home">
     <img src={logo4}  className="logo" />
    </Link>
    <div>{msg}</div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
       <li className="nav-item">
      <Link  className="nav-link" to="/Home">INICIO</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/HistoriaClinica">PERFIL</Link>
    </li>
    <li className="nav-item dropdown ">
            <a className="nav-link" href="#" >
                SERVICIOS
            </a>
            <div className="dropdown-menu ms-auto">
                <a className="dropdown-item" href="#">ESTERILIZACIÓN</a>
                <a className="dropdown-item" href="#">VACUNACIÓN</a>
                <a className="dropdown-item" href="#">CONSULTA</a>
            </div>
            </li>
      </ul>
    </div>

</nav>








    )   
}