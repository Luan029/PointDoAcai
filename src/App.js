import React from "react"
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import Home from "./components/home/Home";
//import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import UserCrud from "./components/compras/UserCrud";
import MontarAcai from "./components/montar/MontarAcai"


export const Props = props => 
    
      <div className="PaginaDeAcai">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/MontarAcai' element={<MontarAcai/>}/>
          <Route path='/users/:id' element={<UserCrud/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
export default Props
