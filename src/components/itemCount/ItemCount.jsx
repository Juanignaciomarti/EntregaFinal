import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [vendido, setVendido] = useState(false)


    const addToCart = (cantidad) => {
        if (count <= itemStock) {
            setCount(1);
            setItemStock(itemStock - cantidad);
            setVendido(true);
            onAdd(cantidad)
        }

    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    const increanse = () => {
        if (count < itemStock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }


    return (
        <>
            <div className="row text-center">
                <div className="col">
                <button className="btn btn-danger m-2" onClick={decrement}>-</button>
                <button className="btn btn-primary m-2">{count}</button>
                <button className="btn btn-success  m-2" onClick={increanse}>+</button>

                    
                </div>
               
            </div>
            <div className="row justify-content-center">
                {vendido ? <Link to={"/cart"} className="button-efect2 m-2">Finalizar compra</Link> :
                    <button className="button-efect2 m-2" onClick={() => { addToCart(count) }} >Agregar al carrito</button>}
            </div>

        </>
    )
}

export default ItemCount