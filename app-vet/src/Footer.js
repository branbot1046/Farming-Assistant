import React from 'react'
import './css/estilos_PerfilM.css'
import logo_face from './imgs/facebook.png'
import logo_insta from './imgs/instagram.webp'
import logo_twitter from './imgs/twitter.png'
import 'bootstrap'

export default function Footer(){
    return (
       <footer>
         <div className="piepag">
           <div className="columna1 d-none d-md-block ">
             <h2>Mas informacion:</h2>
            </div>
          
          <div className="columna2">
            <h2>Redes sociales</h2>
            <div className="row"><a href="https://www.facebook.com/"><img id="imgfooter" src={logo_face}/>Siguenos en Facebook</a>
            </div> <br/>
            <div className="row"><a href="https://www.instagram.com/?hl=es-la"><img id="imgfooter" src={logo_insta} />Siguenos en Instagram</a>
            </div> <br/>
            <div className="row"><a href="https://twitter.com/?lang=es"><img id="imgfooter" src={logo_twitter}/>Siguenos en Twitter</a>
            </div>
           </div>


          <div className="columna3">
            <h2>Informacion de contacto</h2>
            <div className="row">
              <label><i className="bi bi-geo-alt"></i> Bucaramanga,Santander, UIS </label>
            </div>
            <div className="row">
              <label><i className="bi bi-phone"></i> +57 310 216 2249</label>
            </div>
            <div className="row">
              <label><i className="bi bi-envelope-open"></i> julian2180025@correo.uis.edu.co</label>
            </div>
            <div className="row">
              <label><i className="bi bi-envelope-open"></i> luis2190061@correo.uis.edu.co</label>
            </div>
            <div className="row">
              <label><i className="bi bi-envelope-open"></i> cristian2172916@correo.uis.edu.co</label>
            </div>
            <div className="row">
              <label><i className="bi bi-envelope-open"></i> elsyn2172009@correo.uis.edu.co</label>
            </div>


          </div>

        </div>

      </footer>
    )
}