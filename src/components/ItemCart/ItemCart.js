import React, { useContext } from 'react'
import { CartContext } from '../context/CardContext'
import './ItemCart.css'

export const ItemCart = ({item} ) => {

    const { title, amount, img, price} = item
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)

    
    return (

        <div className='cartItem'>
            <p>
                {title} 
            </p>
            <img src={img} alt="" />
            <div>
                {amount}
                <p>Total: $ {amount * price } </p>
            </div>
            <button
                onClick={()=>{
                    console.log('quitar')
                    addItemToCart(item)
                }}
            >
                agregar
            </button>
            <button
                onClick={()=>{
                    console.log('quitar')
                    deleteItemToCart(item)
                }}
            >
                quitar
            </button>
            <hr/>
        </div>
    )
}

