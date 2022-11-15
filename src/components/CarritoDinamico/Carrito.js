import React, {useContext} from 'react'
import { Snacks } from '../Snacks/Snacks'
import { CartContext } from '../context/CardContext'

export const CarritoDinamico = ({data}) => {
    
const {addItemToCart, } = useContext(CartContext)

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4" id="carrito">
            {data.map(({id, title, text, img}) => (
                <div className='col' key={id}>
                    <div className='card'>
                        <img src={img} className='card-img-top' alt={title}/>

                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'><i>{text}</i></p>
                        </div>

                        <div className="card-footer">
                        <button type="button" className="btn btn-secondary btn-lg" onClick={() => addItemToCart(data)}>Comprar</button>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </>
    )
}