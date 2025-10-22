import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import UpdateDepartamentos from './UpdateDepartamentos';

export default class Router extends Component {
  render() {

    function UpdateDepartamentoElement(){
      let {numero, nombre, localidad} = useParams();
      return(<UpdateDepartamentos numero={numero} nombre={nombre} localidad={localidad}/>)
    }

    return (
      <BrowserRouter>
      <MenuDepartamentos />
        <Routes>
            <Route path='/' element={<HomeDepartamentos/>}/>
            <Route path='/createdepartamentos' element={<CreateDepartamentos/>}/>
            <Route path='/updatedepartamento/:numero/:nombre/:localidad' element={<UpdateDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

