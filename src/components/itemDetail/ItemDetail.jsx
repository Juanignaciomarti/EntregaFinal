import React from 'react'

const ItemDetail = ({listProducts}) => {
  return (
    <div className='my-5 p-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-2' >
                 <img src={listProducts.img} alt={listProducts.name} className='img-fluid' />
            </div>  
            <div className='col-md-4'>
                <h1>{listProducts.name}</h1>
                <h5>{listProducts.category}</h5>
                <p><b>${listProducts.price}</b></p>
                <p>{listProducts.specs}</p>
                <button className='btn btn.primary btn-success' >Comprar</button>

            </div>
        </div>
    </div>
  )
}

export default ItemDetail