import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DetailsDepartamento extends Component {

    url = Global.apiDepartamentos
    
    state = {
        departamento: []
    }

    showDepartamento = () =>{
        let request = "api/Departamentos/" + this.props.iddepartamento
        axios.get(this.url + request).then(response=>{
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) =>{
        if(oldProps.iddepartamento !=  this.props.iddepartamento){
            this.showDepartamento();
        }
    }

  render() {
    return (
      <div>
        <h3>Detalles del departamento número {this.state.departamento.numero}</h3>
        <h3><b>Nombre:</b>{this.state.departamento.nombre}</h3>
        <h3><b>Localidad:</b>{this.state.departamento.localidad}</h3>
      </div>
    )
  }
}
