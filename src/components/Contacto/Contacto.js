import React from 'react'
import { gmail, ig, mapa, whatsapp } from '../../assets'
import './contacto.css'

export const Contacto = () => {
  return (
    <section id="contacto">
    <div className="container">
      <div className="row">
          <div className="col-md-8 mx-auto text-center">
              <h1> Contactanos</h1>
              <p className="text-center"><i>Encontranos en donde más te guste. <br/>Si queres atención más personalizada hablanos por whatsapp</i></p>
          </div>
          </div>
      <div className="row">
          <div className="col-6 col-md-3">
              <div className="img_redes" >
                  <a href="https://instagram.com/bitemesnacks?igshid=YmMyMTA2M2Y="><img src={ig} alt="" width="100%" height="100%"></img></a>
                  <hr></hr><i><h5>Instagram</h5></i>
                  <p>@bitemesnacks</p>
              </div>
          </div>
          <div className="col-6 col-md-3">
              <div className="img_redes">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMTJNJFccgbCqxDkjZDSrdQmTlzHTNHBfSmBgZpBRGfJdgpbwGkqDLlqBxMFgfZgrmhZMR"><img src={gmail} alt="" width="100%" height="100%"></img></a>
                  <hr></hr><i><h5> Gmail</h5></i>
                  <p>biteme.snacks.lp@gmail.com</p>
              </div>
          </div>
          <div className="col-6 col-md-3">
              <div className="img_redes">
                <a href="https://www.google.com.ar/maps/place/C.+68+1457,+B1904+La+Plata,+Provincia+de+Buenos+Aires/@-34.9436788,-57.9523483,17z/data=!3m1!4b1!4m5!3m4!1s0x95a2e891ff751da1:0xf87373e9d62c2c27!8m2!3d-34.9436788!4d-57.9501596"><img src={mapa} alt="" width="100%" height="100%"></img></a>
                  <hr></hr><i><h5>Dirección</h5></i>
                  <p>68 1457, La Plata</p>
                  </div>
              </div>
          <div className="col-6 col-md-3">
              <div className="img_redes">
                <a href="https://wa.me/5493442473900"><img src={whatsapp} alt="" width="100%" height="100%"></img></a>
                      <hr></hr><i><h5>Whatsapp</h5></i>
                      <p>+54 9 3442 473900</p>
                  </div>
              </div>
      </div>
      </div>
  </section>
  )
}
