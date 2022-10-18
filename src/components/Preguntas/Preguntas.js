import React from 'react'
import './preguntas.css'

export const Preguntas = () => {
  return (
    <section id="preguntas">
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <h1 className="mb-4"><i>Preguntas frecuentes</i></h1>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            ¿Cuántos snacks puede comer mi mascota por día?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <strong>La cantidad de snacks que pueden comer por dia depende del tamaño del snack y de tu mascota </strong> <br/> Para mascotas pequeñas se aconseja 1 a 2 snacks por dia, medianas de 2 a 3 y grandes hasta 5. <br/> Recordá que los snacks son un agregado a su alimentacion diaria y no deben ser la base de su alimentacion diaria.
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            ¿Cómo debo conservar mis snacks?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <strong>Ninguno de nuestros snacks contiene conservantes,</strong> por lo que es importante que los conserves en un lugar fresco y seco. <br/> <br/> <strong>¡Podes freezarlos y conservarlos por mucho tiempo!</strong>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Si tengo gatos, ¿pueden consumir snacks para perros?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <strong>Claro que si!</strong> Nuestros productos tambien son aptos para gatos.
        </div>
      </div>
    </div>
  </section>
  )
}
