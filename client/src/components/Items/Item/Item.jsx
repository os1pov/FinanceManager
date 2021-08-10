import React from "react"
import "./Item.css"

const Item = ({item}) => {
    const date = item.date.substring(0, 10)

    return(
        <div className="item">
            <div className="item__date__score">
                <div>{date}</div>
                <div>{item.score}</div>
            </div>
            <div>{item.comment}</div>
        </div>
    )
}

export default Item