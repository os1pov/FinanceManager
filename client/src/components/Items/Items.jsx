import React from "react"
import {useSelector} from "react-redux"
import Item from "./Item/Item"
import "./Items.css"

const Items = ({category, display}) => {
    const categoryItems =  useSelector(state => state.item.periodItems)
        .filter(item => item.category === category._id)
        .map(item => <Item item={item}/>)

    return(
        <div className="items" style={{display: display}}>
            {categoryItems}
        </div>
    )
}

export default Items