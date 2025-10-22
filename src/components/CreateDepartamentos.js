import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamentos extends Component {

    url = Global.apiDepartamentos;

    cajanumero = React.createRef();
    cajanombre = React.createRef();
    cajalocalidad = React.createRef();

    state = {
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();
        let departamento = {
            numero: parseInt(this.cajanumero.current.value),
            nombre: this.cajanombre.current.value,
            localidad: this.cajalocalidad.current.value,
        }
        let request = "api/Departamentos";
        axios.post(this.url + request, departamento).then(response => {
            console.log("Insertado");
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'El departamento se ha insertado correctamente',
                timer: 3000,
                timerProgressBar: true
            }).then(()=>{
                this.setState({
                    status: true
                })
            })
        })
    }

  render() {
    return (
      <div>
        {
            this.state.status &&
            <Navigate to={"/"}/>
        }
        <h1>Create Departamentos</h1>
        <form onSubmit={this.insertDepartamento}>
            <label>Numero:</label>
            <input type='number' ref={this.cajanumero} className='form-control'></input>
            <label>Nombre:</label>
            <input type='text' ref={this.cajanombre} className='form-control'></input>
            <label>Localidad:</label>
            <input type='text' ref={this.cajalocalidad} className='form-control'></input><br></br>
            <button className='btn btn-primary'>Insertar departamento</button>
        </form>
      </div>
    )
  }
}
