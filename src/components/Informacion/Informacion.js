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
              <div className="container-fluid">
                <div className="row">
                  <h2 className="col-12 col-md-12">Quiero recibir información</h2>

                  <div className="input-group col-12 col-md-12">
                      <span className="input-group-text" id="nombre_apellido">Nombre y Apellido</span>
                      <input id="nombre" type="text" aria-label="First name" className="form-control" placeholder="Nombre"></input>
                      <input id="apellido" type="text" aria-label="Last name" className="form-control" placeholder="Apellido"></input>
                  </div>

                  <div className="input-group mb-3 col-md-12">
                    <input type="text" id="mail" className="form-control" placeholder="Ingrese su email" 
                    aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                  </div>

                  <div className="input-group mb-3 col-md-12">
                    <span className="input-group-text" id="inputGroup-sizing-default">Ciudad de residencia</span>
                    <input type="city" id="city" className="form-control" aria-label="Sizing example input"></input>
                  </div>

                  <div className="form-check col-12 col-md-12" id="notif">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></input>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                      Quiero recibir notificaciones
                    </label>
                  </div>

                  <button type="button" className="btn btn-secondary col-md-12">Enviar</button>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
