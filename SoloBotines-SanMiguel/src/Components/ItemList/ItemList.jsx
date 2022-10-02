import React from "react"
import {Item} from '../Item/Item'
import './ItemList.css'

export const ItemList = ({list}) =>{
    return(
        <div className="cardgeneral">
            <div className="row segundacard">
            {list.map((botin) =>(
                <Item botines={botin} key={botin.id}/>
            ))}
        </div>
        </div>
    )
}

