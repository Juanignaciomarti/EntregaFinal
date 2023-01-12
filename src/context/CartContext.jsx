import React, { useState,createContext } from 'react'

export const CartContext = createContext();




const CartContextProvider = ({ children }) => {
    
    const [cart , setCart] = useState([]);

    const isInCart = (id) =>{
        return cart.some(x => x.id === id);
    }

    const addItem = (product , cantidad) => {
        if(isInCart(product.id)) {
            let pos = cart.findIndex(x => x.id === product.id);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);

        }else {
            setCart([...cart, {...product, cantidad:cantidad}])
        }
    } 


    const removeItem = (id) => {
        const product = cart.filter(x => x.id !==id)
        setCart([...product]);

    }

    const clear = () =>{
        setCart([]);
    }

    const cartTotal = () =>{
        return cart.reduce((total , item) => total +=item.cantidad, 0 )
    }

    const sumaTotal = () =>{
        return cart.reduce((total , item) => total +=item.cantidad * item.price, 0 )
    }


    return (
        <CartContext.Provider value={{cart , addItem , removeItem, clear, cartTotal, sumaTotal}} >
            {children}
        </CartContext.Provider>


    )
} 

export default CartContextProvider;