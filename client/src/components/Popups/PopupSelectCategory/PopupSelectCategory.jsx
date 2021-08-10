import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setSelectedCategory, setPopupSelectCategoryDisplay as setPopupDisplay} from "../../../reducers/categoryReducer"
import Button from "@material-ui/core/Button"
import "../Popup.css"

const PopupSelectCategory = () => {
    const mode = useSelector(state => state.parameter.mode)
    const selectedCategory = useSelector(state => state.category.selectedCategory)
    const categories = useSelector(state => state.category.categories)
        .filter(category => category.expensesOrIncome === mode)
        .map(category =>
            <Button variant={selectedCategory._id === category._id ? "contained" : "outlined"}
                onClick={() => selectCategory(category)}>
                {category.name}
            </Button>
        )
    const popupDisplay = useSelector(state => state.category.popupSelectCategoryDisplay)
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setPopupDisplay("none"))
    }

    const selectCategory = (category) => {
        dispatch(setSelectedCategory(category))
        closeHandler()
    }

    return (
        <div className="popup" onClick={closeHandler} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Выбрать категорию:</div>
                    <button className="popup__close" onClick={closeHandler}>X</button>
                </div>
                {categories.length === 0 ? "Создайте категорию" : categories}
            </div>
        </div>
    )
}

export default PopupSelectCategory