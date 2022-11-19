import React, { useContext, useEffect, useState } from 'react'
import { snacks } from '../../data/productos';
import { CartContext } from '../context/CardContext';



export const CarritoDinamico = ({data}) => {

    const { addItemToCart } = useContext(CartContext);
    const { cartItems, } = useContext(CartContext)
    


  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4" id="carrito">
              {snacks.map((snak, i) => (
                <div className='col' key={i}>
                    <div className='card'>
                        <img src={snak.img} className='card-img-top' alt={snak.title}/>

                        <div className='card-body'>
                            <h5 className='card-title'>{snak.title}</h5>
                            <p className='card-text'><i>{snak.text}</i></p>
                        </div>
                        <div className='card-body'>
                              <h5 className='card-title'>$ {snak.price}</h5>
                        </div>

                        <div className="card-footer">
                        <small className="boton_comprar">
                            <center>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary btn-lg"
                                          onClick={() => {
                                                addItemToCart(snak)
                                            }
                                    }
                                >
                                    Comprar
                                </button>
                            </center>
                        </small>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </>
    )
}