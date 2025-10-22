import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <MenuDepartamentos />
        <Routes>
            <Route path='/' element={<HomeDepartamentos/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

