import React from 'react'
import './snacks.css'
import { CarritoDinamico} from '../CarritoDinamico/Carrito'
import { snacks } from '../../data/productos';

export const Snacks = () => {
  
  return (
    <section id="snacks">
      <div className='container'>
        <h1>CONOCE NUESTROS PRODUCTOS</h1>
        <h2 className="mb-4">Nuestros Snacks</h2>

        <CarritoDinamico data={snacks}/>
      </div>

    </section>
  )
}
