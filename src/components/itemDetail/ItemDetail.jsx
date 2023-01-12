import React, { useEffect, useState,useContext } from "react";
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({listProducts}) => {
  const{addItem} = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);


  const onAdd = (cantidad) => {
    setItemStock(itemStock - cantidad)
    addItem(listProducts,cantidad);
  }

  useEffect(() =>{
    setItemStock(listProducts.stock)

  },[listProducts])

  return (
    <div className='my-5 p-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-2 align-self-center' >
                 <img src={listProducts.img} alt={listProducts.name} className='img-fluid ' />
            </div>  
            <div className='col-md-6'>
                <h1>{listProducts.name}</h1>
                <h5>{listProducts.category}</h5>
                <p><b>${listProducts.price}</b></p>
                <p>{listProducts.specs}</p>
                <div className='m-5'>
                    <ItemCount initial={1} stock={listProducts.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail