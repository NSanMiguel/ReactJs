//import { ItemCount } from "../ItemCount/ItemCount"
import React, {useEffect,useState} from "react"
import { ItemList } from "../ItemList/ItemList"
//import { botinesData } from "../botinesData"
import { useParams } from "react-router-dom"
import db from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const  ItemListContainer = () =>     {
    const [botines, setBotines] = useState([])
    const [cargando,setCargando] = useState(true)

    const {marca} = useParams()
    

    //    const dataBotines = new Promise ((res,rej)=> {
    //        if(marca){
    //            setTimeout(() => res(botinesData.filter(botin => botin.marca === marca))
    //            , 2000);
    //        }else{
    //            setTimeout(() => res(botinesData)
    //            , 2000);
    //        }
    //    })
    //    dataBotines.then((res)=> {setBotines(res) 
    //        setCargando(false)})
    //    .catch((err)=> console.log(err))
//
    //},[marca])
//
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
     cargando ? <h1> Cargando ... </h1> : <ItemList list={botines}/>
    )
}