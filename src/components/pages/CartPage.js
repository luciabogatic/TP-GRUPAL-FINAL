import React, { useContext } from 'react'
import { CartContext } from '../context/CardContext'
import { ItemCart } from '../ItemCart/ItemCart'

export const CartPage = () => {

    const { cartItems, } = useContext(CartContext)

    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price, 0);


  return (
      <div className='modal-content'>
          <h2>Tu carrito</h2>

          {cartItems.length === 0 ? <p>tu carrito está vacío</p> : (
              <div>{cartItems.map((item, i) => (

                  <ItemCart key={i} item={item} />

              ))}</div>
          )}

          <h2>Total: ${total}</h2>
      </div>
  )
}
