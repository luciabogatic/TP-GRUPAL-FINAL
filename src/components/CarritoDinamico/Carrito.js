import React from 'react'


export const CarritoDinamico = ({data}) => {
    
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
                        <small className="boton_comprar"><center><button type="button" className="btn btn-secondary btn-lg">Comprar</button></center></small>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </>
    )
}