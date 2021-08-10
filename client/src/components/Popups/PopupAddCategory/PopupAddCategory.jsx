import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {createCategory} from "../../../API/category"
import {setPopupAddCategoryDisplay as setPopupDisplay} from "../../../reducers/categoryReducer"
import Input from "../../../utils/Input/Input"
import "../Popup.css"

const PopupAddCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const mode = useSelector(state => state.parameter.mode)
    const popupDisplay = useSelector(state => state.category.popupAddCategoryDisplay)
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setPopupDisplay("none"))
        setCategoryName("")
    }

    const createHandler = () => {
        dispatch(createCategory(categoryName, mode))
        closeHandler()
    }

    return (
        <div className="popup" onClick={closeHandler} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую категорию: {mode === "Expenses" ? "РАСХОДЫ" : "ДОХОДЫ"}</div>
                    <button className="popup__close" onClick={closeHandler}>X</button>
                </div>
                <Input type="text" maxLength={20} placeholder="Введите название..."
                       value={categoryName} setValue={setCategoryName}
                />
                <button className="popup__create" disabled={!categoryName ? true : false}
                        onClick={createHandler}>Создать</button>
            </div>
        </div>
    )
}

export default PopupAddCategory