import axios from "axios"
import {setCategories, addCategory} from "../reducers/categoryReducer"

export const getCategories = () => {
    return async dispatch =>  {
        try {
            const response = await axios.get("http://localhost:8000/api/categories",
                {headers:{Authorization: `Bearer ${localStorage.getItem("token")}`}})
            dispatch(setCategories(response.data))
        } catch (e) {

        }
    }
}

export const createCategory = (categoryName, mode) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:8000/api/categories", {
                name: categoryName,
                expensesOrIncome: mode
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addCategory(response.data))
        } catch (e) {

        }
    }
}