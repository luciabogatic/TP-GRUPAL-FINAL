import React from 'react'
import { info1, info2, info3, info4, info5 } from '../../assets'
import './informacion.css'

export const Informacion = () => {
  return (
<section id="carrusel_informacion">
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={info1} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                  <img src={info2} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                  <img src={info3} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                  <img src={info4} className="d-block w-100" alt=""></img>
                </div>
                <div className="carousel-item">
                  <img src={info5} className="d-block w-100" alt=""></img>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-6" id="informacion"> <br/>
            <h2>Quiero recibir información</h2>
        <div className="input-group">
            <span className="input-group-text">Nombre y Apellido</span>
            <input type="text" aria-label="First name" className="form-control" placeholder="Nombre"></input>
            <input type="text" aria-label="Last name" className="form-control" placeholder="Apellido"></input>
        </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Ingrese su email" 
        aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
        <span className="input-group-text" id="basic-addon2">@gmail.com</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Ciudad de residencia</span>
        <input type="city" className="form-control" aria-label="Sizing example input"></input>
    </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
        <label className="form-check-label" for="flexCheckIndeterminate">
          Quiero recibir notificaciones
        </label>
      </div>
      <button type="button" className="btn btn-secondary">Enviar</button>
          
          </div>
        </div>
      </div>
    </div>

  </section>
  )
}