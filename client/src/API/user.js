import axios from "axios"
import {setUser} from "../reducers/userReducer"

export const registration = (userLogin, password) => {
    return async dispatch => {
        try {
            await axios.post("http://localhost:8000/api/auth/registration", {
                userLogin,
                password
            })
            dispatch(login(userLogin, password))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const login = (userLogin, password) => {
    return async dispatch => {
        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", {
                userLogin,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get("http://localhost:8000/api/auth/auth",
                {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem("token", response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem("token")
        }
    }
}