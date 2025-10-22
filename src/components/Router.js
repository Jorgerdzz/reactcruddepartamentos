import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <MenuDepartamentos />
        <Routes>
            <Route path='/' element={<HomeDepartamentos/>}/>
            <Route path='/createdepartamentos' element={<CreateDepartamentos/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

