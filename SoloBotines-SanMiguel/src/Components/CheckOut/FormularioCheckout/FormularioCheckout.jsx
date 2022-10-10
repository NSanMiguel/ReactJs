import React, {useContext,useState} from 'react';
import { CartContext } from '../../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

export const FormularioCheckout = ({generarOrden}) => {
    const {clearAll,cart,getTotal} = useContext(CartContext)
    const [datos, setDatos] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Telefono: '',})

    const {Nombre, Apellido, Email, Telefono} = datos

    const navigate = useNavigate()

    const manejarFormSubmit = (event) =>{
        event.preventDefault()
        const items = cart.map(e => { return {id: e.botin.id, marca: e.botin.marca, modelo: e.botin.modelo, precio: e.botin.precio, cantidad: e.botin.cantidad}})
        const dia = new Date()
        const total = getTotal()
        const data = { datos, items, dia, total}
        generarOrden(data)
        console.log(data)
    }
    
    const manejarInputChange = (e) => {
        setDatos(({...datos,
            [e.target.name]: e.target.value
    }))
        console.log(datos)
    }

    const volverAlCarrito = () =>{
        clearAll()
        navigate('/cart')
    }

        return (
            <>
                <div className="card">                
                <h4> Ingrese los datos de facturacion: </h4>
                <form onSubmit={manejarFormSubmit}>
                <input className='form-control-sm'
                            type="text"
                            name= "Nombre"
                            placeholder='Nombre'
                            value={Nombre}
                            onChange = {manejarInputChange}
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
                                value="Confirmar Datos"
                                className="btn btn-info"
                            />
                </form>
                <button className='btn btn-info' onClick={() => volverAlCarrito()}> Cancelar Compra </button>
                </div>
            </>
        )
    }


