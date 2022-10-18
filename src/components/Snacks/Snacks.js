import React from 'react'
import './snacks.css'

export const Snacks = () => {
  return (
    <section id="snacks">
    <div className="row"> 
    <div><center><h1>CONOCE NUESTROS PRODUCTOS</h1></center></div>
    <h1 className="mb-4">Nuestros Snacks</h1>

    <div className="col">
      <div className="card h-100">
        <img src="./assets/img/galletita1.jpeg" className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">COOKIE</h5>
          <p className="card-text"><i>Con chips de chocolate</i></p>
        </div>
        <div className="card-footer">
          <small className="boton_comprar"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100">
        <img src="assets/img/galletita6.jpeg" className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">BULL DOG</h5>
          <p className="card-text"><i>De cerdo y papa</i></p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100">
        <img src="./assets/img/galletita4.jpeg" className="card-img-top" alt=""></img>
        <div className="card-body">
          <h5 className="card-title">CARAMELOS</h5>
          <p className="card-text"><i>Con semillas variadas</i></p>
        </div>
        <div className="card-footer">
          <small className="text-muted"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
        </div>
      </div>
    </div>
</div>

<div className="row">
  <div className="col">
    <div className="card h-100">
      <img src="./assets/img/galletita3.jpeg" className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">PATITA</h5>
        <p className="card-text"><i>Con pollo y crema</i></p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="assets/img/galletita2.jpeg" className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">BASTONCITOS</h5>
        <p className="card-text"><i>De pollo y zanahoria</i></p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img src="./assets/img/galletita7.jpeg" className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">HUESITO</h5>
        <p className="card-text"><i>Con carne de cerdo y condimentos</i></p>
      </div>
      <div className="card-footer">
        <small className="text-muted"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
      </div>
    </div>
  </div>

</div>
</section>
  )
}
