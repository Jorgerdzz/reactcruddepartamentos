import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import UpdateDepartamentos from './UpdateDepartamentos';
import DetailsDepartamento from './DetailsDepartamento';

export default class Router extends Component {
  render() {

    function UpdateDepartamentoElement(){
      let {numero, nombre, localidad} = useParams();
      return(<UpdateDepartamentos numero={numero} nombre={nombre} localidad={localidad}/>)
    }

    function DetailsDepartamentoElement(){
      let {iddepartamento} = useParams();
      return(<DetailsDepartamento iddepartamento={iddepartamento}/>)
    }

    return (
      <BrowserRouter>
      <MenuDepartamentos />
        <Routes>
            <Route path='/' element={<HomeDepartamentos/>}/>
            <Route path='/createdepartamentos' element={<CreateDepartamentos/>}/>
            <Route path='/updatedepartamento/:numero/:nombre/:localidad' element={<UpdateDepartamentoElement/>}/>
            <Route path='/detailsdepartamento/:iddepartamento' element={<DetailsDepartamentoElement/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

