import React, {useEffect,useState} from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import db from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { Spinner } from "../Spinner/Spinner"

export const  ItemListContainer = () =>     {
    const [botines, setBotines] = useState([])
    const [cargando,setCargando] = useState(true)

    const {marca} = useParams()
    
    const getData = async(marcas) =>{
        try{
        setCargando(true)
        const document = marcas ? query(collection(db,"Botines"), where ("marca", "==", marcas)) : 
            collection(db,"Botines")
        const col = await getDocs(document)
        const result = col.docs.map((doc)=> doc = {id: doc.id,...doc.data()})
        setBotines(result)
        setCargando(false)
        }   catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getData(marca)
    },[marca])

    
    
    return (
     cargando ? <Spinner/> : <ItemList list={botines}/>
    )
}