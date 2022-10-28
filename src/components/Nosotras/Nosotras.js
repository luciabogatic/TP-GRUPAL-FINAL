import React from 'react'
import { ipa } from '../../assets';
import './nosotras.css';

export const Nosotras = () => {
  return (
    <section id="nosotras">
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-md-12">Sobre Nosotras</h1>
        <div className="color1 col-md-7">
              <div><br></br>
                  <h2>Quienes Somos</h2><hr></hr>
                  <p>
                      Hola amigos! Somos Ipa y Sol y estamos comenzando este hermoso emprendimiento de alimentos para mascotas! Nuestro objetivo es brindar a nuestros clientes productos de calidad, con un excelente servicio y a un precio super accesible.
                  </p><br></br>
                  <h2>Nuestra historia</h2><hr></hr>
                  <p>
                      Les cuento como surge Bite Me. Soy chef recibida en La Plata, ciudad donde vivimos. <br></br> Hace unos meses comencé con la idea de unir dos de mis grandes pasiones: la cocina y los animales. <br></br> Empezó de mi parte como madre perruna, el querer informarme más sobre su alimentación <br></br> y comencé a cocinarle snacks ricos pero realmente sanos para ella. <br></br> Le encantaron, por eso quise compartirlos con ustedes!
                  </p> <br></br>
                  <h2>Qué ofrecemos</h2><hr></hr>
                  <p>
                  Ofrecemos snacks y tortas para sus mascotas 100% natural, elaborados en la cocina de mi hogar, con materias primas de primera calidad, seleccionadas especialmente para ellos! Opto por recetas con productos frescos, sin conservantes, saborizantes  ni colorantes artificiales, pero super sabrosos! <br></br> Hechos en casa, como si fueran para Ipa
                  </p>
              </div>
        </div>
          
        <div className="color1 col-md-5">
          <div className="animate__animated animate__backInUp">
            <img className="img-fluid w-100" src={ipa}alt="" width="50" height="50"></img>
          </div>
        </div>
      </div>
    </div>
        </section> /*ponerle los colorea al fondo*/
  )
}
