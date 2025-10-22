import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import imagen from '../assets/images/Loading_2.gif';

export default class HomeDepartamentos extends Component {

    url = Global.apiDepartamentos;

    state = {
        departamentos: [],
        status: false
    }

    loadDepartamentos = () => {
        let request = "api/Departamentos";
        axios.get(this.url + request).then(response => {
            this.setState({
                departamentos: response.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
      <div>
        {
            !this.state.status ?
            <img src={imagen}></img>:
            <div>
                <h1>Home Departamentos</h1>
                <table className='table table-dark table-striped"'>
                    <thead>
                        <tr>
                            <th>NÚMERO</th>
                            <th>NOMBRE</th>
                            <th>LOCALIDAD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{dept.numero}</td>
                                        <td>{dept.nombre}</td>
                                        <td>{dept.localidad}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        }  
      </div>
    )
  }
}
