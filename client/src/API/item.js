import axios from "axios"
import {setAllItems, setPeriodItems, addItem} from "../reducers/itemReducer"

export const getItems = (period) => {
    return async dispatch =>  {
        try {
            const {firstDate, lastDate} = period
            const response = await axios.get(`http://localhost:8000/api/items?firstDate=${firstDate}&lastDate=${lastDate}`,
                {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            dispatch(setPeriodItems(response.data))
            if (!firstDate) {
                dispatch(setAllItems(response.data))
            }
        } catch (e) {

        }
    }
}

export const createItem = (categoryId, date, score, comment, mode) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:8000/api/items", {
                    categoryId,
                    date,
                    score,
                    comment,
                    expensesOrIncome: mode
                },
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            dispatch(addItem(response.data))
        } catch (e) {

        }
    }
}