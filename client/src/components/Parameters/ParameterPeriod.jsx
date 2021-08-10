import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {setSelectedPeriod, setPopupSelectPeriodDisplay} from "../../reducers/parameterReducer"
import PopupSelectPeriod from "../Popups/PopupSelectPeriod/PopupSelectPeriod"
import {useStyles} from "./MUIStyles"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

const ParameterPeriod = () => {
    const classes = useStyles()

    const selectedPeriod = useSelector(state => state.parameter.selectedPeriod)
    const [styleActivePeriod, setStyleActivePeriod] = useState("currentMonth")
    const dispatch = useDispatch()

    const setPeriodHandler = (period, selectedFirstDate, selectedLastDate) => {
        dispatch(setSelectedPeriod(period, selectedFirstDate, selectedLastDate))
        setStyleActivePeriod(period)
    }

    const showPopupSelectPeriod = () => {
        dispatch(setPopupSelectPeriodDisplay("flex"))
    }

    return (
        <div className={classes.root}>
            <ButtonGroup color="primary">
                <Button onClick={() => setPeriodHandler("currentDay")} variant={styleActivePeriod === "currentDay" ? "contained" : "outlined"}>ДЕНЬ</Button>
                <Button onClick={() => setPeriodHandler("currentWeek")} variant={styleActivePeriod === "currentWeek" ? "contained" : "outlined"}>НЕДЕЛЯ</Button>
                <Button onClick={() => setPeriodHandler("currentMonth")} variant={styleActivePeriod === "currentMonth" ? "contained" : "outlined"}>МЕСЯЦ</Button>
                <Button onClick={() => setPeriodHandler("currentYear")} variant={styleActivePeriod === "currentYear" ? "contained" : "outlined"}>ГОД</Button>
                <Button onClick={showPopupSelectPeriod} variant={styleActivePeriod === "selectedPeriod" ? "contained" : "outlined"}>ПЕРИОД</Button>
            </ButtonGroup>
            <h3>{selectedPeriod}</h3>
            <PopupSelectPeriod setPeriodHandler={setPeriodHandler}/>
        </div>
    )
}

export default ParameterPeriod