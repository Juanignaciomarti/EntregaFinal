import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => { 

  return (
   <div>
      <div className="card m-2" style={{width: '18rem'}}> 
        <img  id='img-card' src={product.img} className="card-img-top p-4" alt={product.name} /> 
        <div className="card-body">
          <h5 className="card-title text-center">{product.name}</h5>
          <p className="card-text text-center">${product.price}</p>
          <Link to={'/item/' + product.id} className="btn btn-primary text-center">Ver Detalles</Link>
        </div>
      </div>
    </div>
  )
}

export default Item