import React from "react"
import {useSelector} from "react-redux"
import Category from "./Category/Category"
import "./Categories.css"

const Categories = () => {
    const mode = useSelector(state => state.parameter.mode)
    const categories = useSelector(state => state.category.categories)
        .filter(category => category.expensesOrIncome === mode)
        .map(category => <Category category={category} key={category._id}/>)
    const items = useSelector(state => state.item.periodItems)
        .filter(items => items.expensesOrIncome === mode)

    return (
        <div className="categories">
            {items.length === 0 ? "Расходов нет" : <h2>{categories}</h2>}
        </div>
    )
}

export default Categories