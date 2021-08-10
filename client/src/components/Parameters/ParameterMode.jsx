import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {setMode} from "../../reducers/parameterReducer"
import {useStyles} from "./MUIStyles"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"

const ParameterMode = () => {
    const classes = useStyles()

    const mode = useSelector(state => state.parameter.mode)
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" size="large">
                <Button onClick={() => dispatch(setMode("Expenses"))} variant={mode === "Expenses" ? "contained" : "outlined"}>Расходы</Button>
                <Button onClick={() => dispatch(setMode("Income"))} variant={mode === "Income" ? "contained" : "outlined"}>Доходы</Button>
            </ButtonGroup>
        </div>
    )
}

export default ParameterMode