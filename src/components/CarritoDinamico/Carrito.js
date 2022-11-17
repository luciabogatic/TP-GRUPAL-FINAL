import React from 'react'

export const CarritoDinamico = ({data}) => {

  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4" id="carrito">
            {data.map(({id, title, text, img}) => (
                <div className='offset-1 col-10 offset-lg-0 col-lg-4' key={id}>
                    <div className='card'>
                        <img src={img} className='card-img-top' alt={title}/>

                        <div className='card-footer'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'><i>{text}</i></p>

                            <button type="button" class="btn btn-secondary btn-lg">Comprar</button>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </>
    )
}