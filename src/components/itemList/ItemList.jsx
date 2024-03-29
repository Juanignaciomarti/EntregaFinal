import React from 'react'
import Item from '../item/Item'

const ItemList = ({ listProducts }) => {

  return (
    <div>
       <div className="d-flex flex-wrap justify-content-center">
         {listProducts.map(product => <Item key={product.id} product={product}/>)}
       </div>
    </div>
  )
}

export default ItemList 