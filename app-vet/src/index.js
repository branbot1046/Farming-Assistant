import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HistoriaClinica from './HistoriaClinica';
import AnunciosBar from './AnunciosBar';
import Home from './Home';
import NavBar from './NavBar';
import NavBar_M from './NavBar_M';
import Footer from './Footer';
import LogIn from './LogIn';
import { BrowserRouter, matchRoutes, Route, Routes } from 'react-router-dom';



ReactDOM.render(
  
  <React.StrictMode>
    {console.log("index", sessionStorage.getItem("usuario"))}
    
    <BrowserRouter>
    <AnunciosBar/>
    <NavBar_M/>
    <NavBar/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/HistoriaClinica' element={<HistoriaClinica />}/>
    <Route path='/LogIn' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);




