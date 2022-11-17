import React from 'react'
import { beneficios, bocadillo } from '../../assets'
import './beneficios.css'

export const Beneficios = () => {
  return (
    <section id="beneficios">
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img className="img-fluid rounded mb-5 mb-lg-0" src={beneficios} alt=""></img>
          </div>
          <div className="col-lg-7">
            <p className="section-title pr-5">
              <span className="pr-2"><i>Sobre Nosotros</i></span>
            </p>
            <h1 className="mb-4">Beneficios de nuestros Productos</h1>
            <p>
              Ofrecemos a sus perritos una opción deliciosa y 100% natural, con materias primas
              seleccionadas especialmente para ellos! Opto por recetas con productos frescos, sin
              conservantes, saborizantes ni colorantes artificiales, pero super sabrosos! Hechos en
              casa, como si fueran para Ipa
            </p>
            <div className="row pt-2 pb-4">
              <div className="col-6 col-md-4">
                <img className="img-fluid rounded" src={bocadillo} alt=""></img>
              </div>
              <div className="col-6 col-md-8">
                <ul className="list-inline m-0">
                  <li className="py-2 border-top border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>✔️Nutrientes de origen natural
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>✔️Mejora del sistema inmunitario
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>✔️Reducción del sarro de los dientes
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>✔️Salud a la vista
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-secondary offset-1 col-10 offset-lg-2 col-lg-8">Aprendé más sobre nosotros</button>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
