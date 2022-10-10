import React, {createContext,useState} from 'react';

const CartContext = createContext()
const CartProvider = (props) => {
     
    const [cart, setCart] = useState([]);

    const addItem = (botin) => {
        if(isInCart(botin.id)){
            const cartAux = cart.map(producto => {
                if(producto.botin.id === botin.id) {
                        producto.botin.cantidad = producto.botin.cantidad + botin.cantidad
                } 
                return producto

            })
            setCart(cartAux)
        }
            else{
            setCart([...cart,{botin}])
        }    
    }

    const isInCart = (id) =>{
        return cart.find(producto => (producto.botin.id === id))
    }

    const removeItem = (id) => {
        setCart(cart.filter( producto => producto.botin.id !== id))
    }

    const clearAll = () =>{
        setCart([])
    }

    const getTotal = () =>{
        let total = 0
        cart.forEach((producto) => {
            total += (producto.botin.cantidad * producto.botin.precio)
        });
        return total
    }
    
    const getCantidad = () =>{
        let cantidadTotal = 0
        cart.forEach((producto) => {
            cantidadTotal += producto.botin.cantidad
        })
        return cantidadTotal
    }

    return (
        <>
        <CartContext.Provider value={{cart,addItem,removeItem,clearAll,getTotal,getCantidad}}>
            {props.children}
        </CartContext.Provider>
        </>
        
    );
}

export  {CartContext, CartProvider};
