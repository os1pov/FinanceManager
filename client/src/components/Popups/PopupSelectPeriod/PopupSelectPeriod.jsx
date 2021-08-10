import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {setPopupSelectPeriodDisplay as setPopupDisplay} from "../../../reducers/parameterReducer"
import Input from "../../../utils/Input/Input"
import "../Popup.css"

const PopupSelectPeriod = ({setPeriodHandler}) => {
    const currentDate = useSelector(state => state.parameter.currentDate)
    const [selectedFirstDate, setSelectedFirstDate] = useState(currentDate)
    const [selectedLastDate, setSelectedLastDate] = useState(currentDate)
    const popupDisplay = useSelector(state => state.parameter.popupSelectPeriodDisplay)
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setPopupDisplay("none"))
        setSelectedFirstDate(currentDate)
        setSelectedLastDate(currentDate)
    }

    const createHandler = () => {
        setPeriodHandler("selectedPeriod", selectedFirstDate, selectedLastDate)
        closeHandler()
    }

    return (
        <div className="popup" onClick={closeHandler} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Выбрать период:</div>
                    <button className="popup__close" onClick={closeHandler}>X</button>
                </div>
                <Input type="date" value={selectedFirstDate} setValue={setSelectedFirstDate}/>
                <Input type="date" value={selectedLastDate} setValue={setSelectedLastDate}/>
                <button className="popup__create" onClick={createHandler}>Выбрать</button>
            </div>
        </div>
    )
}

export default PopupSelectPeriod