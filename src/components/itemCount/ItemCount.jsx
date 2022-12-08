import React, { useState } from "react";


const ItemCount = ({ initial, stock }) => {

    const [count, setCount] = useState(1)

    const increanse = () => count < stock && setCount(count + 1)
    const decrement = () => count > initial && setCount(count -1)

    const onAdd = () => {
        if(stock >0){
            console.log("Agregaste: " + count + " Productos al carrito")
        }
    }

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-danger m-2" onClick={decrement}>-</button>
            <p className="d-flex align-items-center">{count}</p>
            <button className="btn btn-success  m-2" onClick={increanse}>+</button>
            <button className="btn btn-primary  m-2"onClick={onAdd} >Agregar al carrito</button>

        </div>
    )
}

export default ItemCount
