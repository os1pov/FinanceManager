import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {getCategories} from "../../API/category"
import {getItems} from "../../API/item"
import {setPopupAddItemDisplay as setPopupDisplay} from "../../reducers/itemReducer"
import ParameterMode from "../Parameters/ParameterMode"
import ParameterPeriod from "../Parameters/ParameterPeriod"
import Categories from "../Categories/Categories"
import PopupAddItem from "../Popups/PopupAddItem/PopupAddItem"
import PopupAddCategory from "../Popups/PopupAddCategory/PopupAddCategory"
import PopupSelectCategory from "../Popups/PopupSelectCategory/PopupSelectCategory"
import IconAdd from "../../utils/IconAdd/IconAdd"
import "./Main.css"

const Main = () => {
    const mode = useSelector(state => state.parameter.mode)
    const sortPeriod = useSelector(state => state.parameter.sortPeriod)
    const allExpenses = useSelector(state => state.item.allItems)
        .filter(item => item.expensesOrIncome === "Expenses")
        .map(item => item.score)
        .reduce((a,b) => a+b, 0)
    const allIncome = useSelector(state => state.item.allItems)
        .filter(item => item.expensesOrIncome === "Income")
        .map(item => item.score)
        .reduce((a,b) => a+b, 0)
    const totalScore = new Intl.NumberFormat("ru-RU").format(allIncome - allExpenses) + " ₽"
    const periodScore =  useSelector(state => state.item.periodItems)
        .filter(item => item.expensesOrIncome === mode)
        .map(item => item.score)
        .reduce((a,b) => a + b, 0)
    const periodScoreRuFormat = new Intl.NumberFormat("ru-RU").format(periodScore) + " ₽"
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    },[])

    useEffect(() => {
        dispatch(getItems(sortPeriod))
    },[sortPeriod])

    const showPopupAddItem = () => {
        dispatch(setPopupDisplay("flex"))
    }

    return (
        <div className="main">
            <h1>Итого: {totalScore}</h1>
            <ParameterMode/>
            <ParameterPeriod/>
            <h1>
                {periodScoreRuFormat}
                <IconAdd child="+" func={showPopupAddItem}/>
            </h1>
            <Categories/>
            <PopupAddItem/>
            <PopupAddCategory/>
            <PopupSelectCategory/>
        </div>
    )
}

export default Main