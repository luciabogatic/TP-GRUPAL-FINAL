import React from 'react'
import './snacks.css'
import { CarritoDinamico} from '../CarritoDinamico/Carrito'
import { snacks } from '../../data/productos';

export const Snacks = () => {
  return (
    <section id="snacks">
    <div className="row"> 
    <div><center><h1>CONOCE NUESTROS PRODUCTOS</h1></center></div>
    <h1 className="mb-4">Nuestros Snacks</h1>

    <CarritoDinamico data={snacks}/>

</div>
</section>
  )
}
