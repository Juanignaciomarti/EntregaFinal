import React from 'react'
import { products } from '../fetchProducts/data'
import { fetchProducts } from '../fetchProducts/fetchProducts'
import ItemDetail from '../itemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loading'
import ItemCount from '../itemCount/ItemCount'

const ItemDetailContainer = () => {

    const [listProducts, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
         setLoading(true)
        fetchProducts(products.find(listProducts => listProducts.id === parseInt(id)))
        .then(res => {
            setProducts(res)
            setLoading(false)
        
        })
    },[id])

  return (
    <div>
        <div>
              {
                loading ? 
                <Loader/>:
                <ItemDetail listProducts={listProducts} />                
              }       
          </div> 
        
     </div>       
  )
}

export default ItemDetailContainer