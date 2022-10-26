import React from 'react'
import { Beneficios } from '../Beneficios/Beneficios'
import { Contacto } from '../Contacto/Contacto'
import { Feedback } from '../Feedback/Feedback'
import { Informacion } from '../Informacion/Informacion'
import { Nosotras } from '../Nosotras/Nosotras'
import { Preguntas } from '../Preguntas/Preguntas'
import { Presentacion } from '../Presentacion/Presentacion'
import { Snacks } from '../Snacks/Snacks'


export const Home = () => {
  return (
      <>
      <Presentacion/>
      <Beneficios/>
      <Informacion/>
      </>
  )
}
