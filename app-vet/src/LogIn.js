import React, {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export default function LogIn(props){
    const [state, setState] = useState({
        correo: "",
        passw: "",
    })

    const handleChange = e =>{
        setState({      
            ...state,      
            [e.target.name]: e.target.value,
            })
        console.log(e.target.value)
    }
    const handleClick = () =>{
        let jsonData = {
            "email": state.correo,
            "password": state.passw
        }
        console.log(jsonData);

        fetch('http://localhost:4000/api/auth/login',{
        method:'POST',
        mode:'cors',
        body: JSON.stringify(jsonData)})
        .then(res => {
            sessionStorage.setItem("usuario", state.correo)
            console.log("usuario", sessionStorage.getItem("usuario"))
            window.location='/Home';
        })
    }
    return(
        <>
        <div className='login-container'>
        <div className='form-container'>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo</label>
            <input type="email"
                className="form-control"
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                name="correo"
                value={state.correo}
                onChange={handleChange}/>

            <small id="emailHelp" className="form-text text-muted">Ejemplo: ejemplo@gmail.com</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password"
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Contraseña"
                name="passw"
                value={state.passw}
                onChange={handleChange}/>
        </div>
        <div className="form-check">

        </div>
        <button onClick={handleClick} className="boton-aceptar">Enviar</button>
        </div>
        </div>
        </>
    )
}

function action(){

}