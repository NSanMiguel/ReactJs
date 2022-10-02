import { getDoc,doc } from 'firebase/firestore';
import db from '../../services/firebase';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const [botin, setBotines] = useState([{}])
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

    const getSelected = async (idBotines) => {
        try{
            setCargando(true)
            const document = doc(db,"Botines",idBotines)
            const response = await getDoc(document)    
            const result = {id: response.id, ...response.data()}
            setBotines(result)
            setCargando(false)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getSelected(id)
    },[id])



    return(
       cargando ? <h1> Cargando ... </h1> : <ItemDetail item={botin}/>
    )
}