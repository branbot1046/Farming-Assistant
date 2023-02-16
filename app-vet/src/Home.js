import React from 'react'
import index_1 from './imgs/index_1.jpg'
import index_2 from './imgs/index_2.jpg'
import index_3 from './imgs/index_3.jpg'
import index_4 from './imgs/index_4.jpg'
import './css/estilos_PerfilM.css';



export default function Home(){
    return(
        <div className="container-fluid">
        <div>
         <img id="index_4" src={index_4} />

       </div>

   <div className="row">
        <div className="col-md-4">
				<div className="barraiz">
                
                 <h5> <br/><br/> Quienes somos</h5>
                 
                <h3>
                  Nuestro objetivo es crear una sociedad donde los animales no humanos y humanos convivan en armonía y respeto, donde seamos capaces de valorar las diferencias y proteger aquellos que no pueden defenderse.
                </h3>

				</div>
			</div>



            <div className="col-md-8">
				<div className="barramedio">
					<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
						  <ol className="carousel-indicators" >
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
						    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
						  </ol>
						  <div className="carousel-inner"  >
						    <div className="carousel-item active" >
						      <img id="imgI" src={index_1} className="d-block w-100" alt="..." />
						  </div>
						    <div className="carousel-item">
						      <img id="imgI"src={index_2} className="d-block w-100" alt="..." />
						  	</div>
						    <div className="carousel-item">
						      <img id="imgI" src={index_3} className="d-block w-100" alt="..." />
						    </div>
  						</div>
  						
					</div>

				</div>
			</div>



       </div>
</div>











    )   
}