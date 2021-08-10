const SET_USER = "SET_USER"
const LOGOUT = "SET_INITIAL_STATE"

const initialState = {
    isAuth: false,
    currentUser: {},
}

export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
                currentUser: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return initialState
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})