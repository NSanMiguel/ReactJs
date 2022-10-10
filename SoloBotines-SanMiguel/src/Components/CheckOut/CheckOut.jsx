import React, { useState, useContext } from "react"
import db from "../../services/firebase"
import { addDoc, collection } from "firebase/firestore"
import { CartContext } from "../../Context/CartContext"
import { MostrarProducto } from "./MostrarPoducto/MostrarProducto"
import { FormularioCheckout } from "./FormularioCheckout/FormularioCheckout"
import { MostrarOC } from "./MostrarOC/MostrarOC"

const CheckOut = () => {
    const {clearAll,cart} = useContext(CartContext)
    const [ordenId,setOrdenId] = useState()
    

    const generarOrden = async (data) =>{
        try{
            const col = collection(db,"Orden")
            const orden = await addDoc(col, data)
            setOrdenId(orden.id)
            clearAll()
        }catch(error) {
            console.log(error)
        }
    }

    return (
        <>
           <h1> Finalizar compra </h1>
           {cart.map((carrito,indice)=> {
                     return <MostrarProducto key={indice} cart={carrito}/>
                 })}
            <br/>
            {!ordenId?
            <FormularioCheckout generarOrden={generarOrden}/>
            :
            
            <MostrarOC orden={ordenId} />
            }
            </>
)}

export default CheckOut;
