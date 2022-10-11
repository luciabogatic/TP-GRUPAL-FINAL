import React from 'react'
import './presentacion.css'

export const Presentacion = () => {
  return (
    <section id="presentacion">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="animate__animated animate__backInUp">BITE ME🐶</h1>
        <p className="lead">Bienvenidos a nuestra página oficial<br></br> En nuestra web encontraran los mejores alimentos saludables para sus mascotas, informacion sobre nuestro emprendimiento, fotos de nuestra comunidad y podrán interactuar con nosotros en todo momento</p>
        <p>
          <a href="#" class="btn btn-secondary my-2">Ver Productos</a>
          <a href="#" class="btn btn-secondary my-2">Seguir Navegando</a>
        </p>
      </div>
    </div>
  </section>
  )
}

