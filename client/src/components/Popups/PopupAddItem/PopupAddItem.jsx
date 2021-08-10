import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {createItem} from "../../../API/item"
import {setPopupAddItemDisplay as setPopupDisplay} from "../../../reducers/itemReducer"
import {setSelectedCategory, setPopupAddCategoryDisplay, setPopupSelectCategoryDisplay} from "../../../reducers/categoryReducer"
import Input from "../../../utils/Input/Input"
import IconAdd from "../../../utils/IconAdd/IconAdd"
import "../Popup.css"

const PopupAddItem = () => {
    const mode = useSelector(state => state.parameter.mode)
    const currentDate = useSelector(state => state.parameter.currentDate)
    const [selectedDate, setSelectedDate] = useState(currentDate)
    const selectedCategory = useSelector(state => state.category.selectedCategory)
    const [operationScore, setOperationScore] = useState("")
    const [comment, setComment] = useState("")
    const popupDisplay = useSelector(state => state.item.popupAddItemDisplay)
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setPopupDisplay("none"))
        dispatch(setSelectedCategory(""))
        setSelectedDate(currentDate)
        setOperationScore("")
        setComment("")
    }

    const createHandler = () => {
        dispatch(createItem(selectedCategory._id, selectedDate, operationScore, comment, mode))
        closeHandler()
    }

    const showPopupAddCategory = () => {
        dispatch(setPopupAddCategoryDisplay("flex"))
    }

    const showPopupSelectCategory = () => {
        dispatch(setPopupSelectCategoryDisplay("flex"))
    }

    return (
        <div className="popup" onClick={closeHandler} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">
                        Добавление операции: {mode === "Expenses" ? "РАСХОДЫ" : "ДОХОДЫ"}
                    </div>
                    <button className="popup__close" onClick={closeHandler}>X</button>
                </div>
                <div>
                    <Input type="date" value={selectedDate} setValue={setSelectedDate}/>
                    <Input type="number" maxLength={9} placeholder="0" child="RUB"
                           value={operationScore} setValue={setOperationScore}
                    />
                    <div>
                        Категория
                        <IconAdd child="˅" func={showPopupSelectCategory}/>
                        : {selectedCategory.name}
                        <IconAdd child="+" func={showPopupAddCategory}/>
                    </div>
                    <Input type="text" maxLength={40} placeholder="Комментарий"
                           value={comment} setValue={setComment}/>
                </div>
                <button className="popup__create" disabled={!selectedCategory ? true : false}
                        onClick={createHandler}>Добавить</button>
            </div>
        </div>
    )
}

export default PopupAddItem