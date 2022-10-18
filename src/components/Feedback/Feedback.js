import React from 'react'
import { feedback } from '../../assets'
import './feedback.css'

export const Feedback = () => {
  return (

    <section id="feedback">
<div className="container-fluid">
  <div className="container">
  <div className="row">
    <div className="col-md-6">

      <div className="mb-3">
        <h1>Dejanos tu Feedback</h1>
        <label for="exampleFormControlInput1" class="form-label">Ingresá tu mail</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="usuario@gmail.com"></input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Tu información nos ayuda a mejorar</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="¿Qué te pareció nuestro servicio? - ¿Qué podríamos mejorar o incorporar en nuestros productos? - ¿Qué es lo que más te gusta de nosotros?"></textarea >
          <br></br>
          <button type="button" class="btn btn-light">Enviar</button>
      </div>
    </div>

    <div className="col-md-6"> 
      <center><img src={feedback} width="500px" height="500px"></img></center>
    </div>
  </div>
  </div>
</div>
</section>

  )
}


