import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {


  return (
    <div className="m-2" >
      <div className="card m-2" style={{ width: '18rem'  }}>
        <img id='img-card' src={product.img} className="card-img-top p-4 img-fluid " alt={product.name} />
        <div className="card-body">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text text-center">${product.price}</p>
          <div className='text-center mt-4'>
              <Link to={'/item/' + product.id} className="button-efect ">Ver Detalles</Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item