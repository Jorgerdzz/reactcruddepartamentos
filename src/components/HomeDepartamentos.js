import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import imagen from '../assets/images/Loading_2.gif';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

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

    // deleteDepartamento = (id) => {
    //     let request = "api/Departamentos/" + id
    //     axios.delete(this.url + request).then(response=>{
    //         console.log("Eliminado")
    //         Swal.fire({
    //             icon: 'success',
    //             title: "El departamento se ha eliminado correctamente",
    //             timer: 3000,
    //             timerProgressBar: true
    //         }).then(() => {

    //         })
    //     })
    // }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
      <div>
        {
            !this.state.status ?
            <img src={imagen}></img>:
            <div className='mx-auto' style={{width: "50%"}}>
                <h1 className='text-center m-3'>Home Departamentos</h1>
                <table className='table table-dark table-striped m-3'>
                    <thead>
                        <tr>
                            <th>NÚMERO</th>
                            <th>NOMBRE</th>
                            <th>LOCALIDAD</th>
                            <th>ACCIONES</th>
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
                                        <td>
                                            <NavLink to={"/updatedepartamento/" + dept.numero + "/" + dept.nombre + "/" + dept.localidad}>
                                                <button className='btn btn-warning'>UPDATE</button>
                                            </NavLink>
                                            <button onClick={this.deleteDepartamento(dept.numero)} className='btn btn-danger'>
                                                DELETE
                                            </button>
                                        </td>
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
