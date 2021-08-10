import React, {useState} from "react"
import {useSelector} from "react-redux"
import Items from "../../Items/Items"
import "./Category.css"

const Category = ({category}) => {
    const [display, setDisplay] = useState("none")
    const categoryScore =  useSelector(state => state.item.periodItems)
        .filter(item => item.category === category._id)
        .map(item => item.score).reduce((a,b) => a + b, 0)
    const score = new Intl.NumberFormat('ru-RU').format(categoryScore)

    const setDisplayHandler = () => {
        if (display === "none") setDisplay("flex")
        else setDisplay("none")
    }

    return (
        <div className="category" style={{display: categoryScore === 0 ? "none" : "block"}}
             onClick={setDisplayHandler}>
            <div>· {category.name} - {score}</div>
            <Items category={category} display={display}/>
        </div>
    )
}

export default Category