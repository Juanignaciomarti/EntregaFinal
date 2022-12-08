import React from 'react'
import { useEffect, useState } from 'react'
import { products } from '../fetchProducts/data'
import { fetchProducts } from '../fetchProducts/fetchProducts'
import ItemList from '../itemList/ItemList'
import ItemCount from '../itemCount/ItemCount'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loading'

const ItemListContainer = () => {

    const [listProducts, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()



    useEffect(() => {
        setLoading(true)
        fetchProducts(category ? products.filter(listProducts => listProducts.category === category) : products)
            .then(res => {
                setProducts(res)
                setLoading(false)
            })
    }, [category])


    return (
        <div className='container'>
            <div className='row '>
               { loading ?
                    <Loader/>:                         
                    <ItemList listProducts={listProducts} /> }
                    <div className='col col-lg-12  text-center '>
                     <ItemCount initial={1} stock={4} onAdd={() => {}}/> 
                    </div>                  
            </div>
        </div>
    )
}

export default ItemListContainer