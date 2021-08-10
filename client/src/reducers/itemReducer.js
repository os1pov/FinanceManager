const SET_PERIOD_ITEMS = "SET_PERIOD_ITEMS"
const SET_ALL_ITEMS = "SET_ALL_ITEMS"
const ADD_ITEMS = "ADD_ITEMS"
const SET_POPUP_ADD_ITEM_DISPLAY = "SET_POPUP_ADD_ITEM_DISPLAY"
const SET_INITIAL_STATE = "SET_INITIAL_STATE"

const initialState = {
    allItems: [],
    periodItems: [],
    popupAddItemDisplay: "none",
}

export const itemReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ALL_ITEMS:
            return {
                ...state,
                allItems: action.payload
            }
        case SET_PERIOD_ITEMS:
            return {
                ...state,
                periodItems: action.payload
            }
        case ADD_ITEMS:
            return {
                ...state,
                allItems: [...state.allItems, action.payload],
                periodItems: [...state.periodItems, action.payload]
            }
        case SET_POPUP_ADD_ITEM_DISPLAY:
            return {
                ...state,
                popupAddItemDisplay: action.payload
            }
        case SET_INITIAL_STATE:
            return initialState
        default:
            return state

    }
}

export const setAllItems = (items) => ({type: SET_ALL_ITEMS, payload: items})
export const setPeriodItems = (items) => ({type: SET_PERIOD_ITEMS, payload: items})
export const addItem = (item) => ({type: ADD_ITEMS, payload: item})
export const setPopupAddItemDisplay = (display) => ({type: SET_POPUP_ADD_ITEM_DISPLAY, payload: display})