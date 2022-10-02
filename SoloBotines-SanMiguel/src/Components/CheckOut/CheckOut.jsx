import React, { useState, useContext } from "react"
import db from "../../services/firebase"
import { addDoc, collection } from "firebase/firestore"
import { CartContext } from "../../Context/CartContext"
import { MostrarProducto } from "./MostrarProducto/MostrarProducto"
import { useNavigate } from 'react-router-dom';
import { MostrarOC } from "./MostrarOC/MostrarOC"

const CheckOut = () => {
    const {cart, getTotal, clearAll} = useContext(CartContext)
    const [ordenId,setOrdenId] = useState()
    const [comprador, setComprador] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Telefono: '',
     });

    const {Nombre,Apellido,Email,Telefono} = comprador

    const navigate = useNavigate()

    const generarOrden = async (data) =>{
        try{
            const col = collection(db,"Orden")
            const orden = await addDoc(col, data)
            setOrdenId(orden)
            clearAll()
        }catch(error) {
            console.log(error)
        }
    }

    const manejarFormSubmit = (e) =>{
        e.preventDefault()
        const items = cart.map(e => { return {id: e.botin.id, marca: e.botin.marca, modelo: e.botin.modelo, precio: e.botin.precio, cantidad: e.botin.cantidad}})
        const dia = new Date()
        const total = getTotal()
        const data = {comprador, items, dia, total}
        generarOrden(data)
    }

    const manejarInputChange = (e) => {
        setComprador(({
            ...comprador,
            [e.target.name]: e.target.value
        }))
    }

    const volverAlCarrito = () =>{
        clearAll()
        navigate('/cart')
    }
    

    return (
        <>
           <h1> Finalizar compra </h1>
           {cart.map((carrito,indice)=> {
                     return <MostrarProducto key={indice} cart={carrito}/>
                 })}
            <br/>
           {!ordenId ?
           <div className="card"><h4> Ingrese los datos de facturacion: </h4>
            <form onSubmit={manejarFormSubmit}>
            <input className='form-control-sm'
                        type="text"
                        name= "Nombre"
                        placeholder='Nombre'
                        value={Nombre}
                        onChange ={manejarInputChange}
                        required
                        ></input>

                    <input className='form-control-sm'
                        type="text"
                        name= "Apellido"
                        placeholder='Apellido'
                        value={Apellido}
                        onChange ={manejarInputChange}
                        required
                        ></input>
                        
                    <input className='form-control-sm'
                        type="email"
                        name= "Email"
                        placeholder='Email@Ejemplo.com'
                        value={Email}
                        onChange ={manejarInputChange}
                        required
                        ></input>

                    <input className='form-control-sm'
                        type="number"
                        name= "Telefono"
                        placeholder='Telefono'
                        value={Telefono}
                        onChange ={manejarInputChange}
                        required
                        ></input>
                    <br/>
                    <br/>
                    <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-info"
                        />
            </form>
            <button className='btn btn-info' onClick={() => volverAlCarrito()}> Cancelar Compra </button>
            </div>
            :
            <div>
            <MostrarOC orden={ordenId.id} buyer={comprador}/>
            </div>
           }
        </>
    )
}

export default CheckOut;
