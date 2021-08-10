const SET_CATEGORIES = "SET_CATEGORIES"
const ADD_CATEGORY = "ADD_CATEGORY"
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY"
const SET_POPUP_ADD_CATEGORY_DISPLAY = "SET_POPUP_ADD_CATEGORY_DISPLAY"
const SET_POPUP_SELECT_CATEGORY_DISPLAY = "SET_POPUP_SELECT_CATEGORY_DISPLAY"
const SET_INITIAL_STATE = "SET_INITIAL_STATE"

const initialState = {
    categories: [],
    selectedCategory: "",
    popupAddCategoryDisplay: "none",
    popupSelectCategoryDisplay: "none",
}

export const categoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case SET_POPUP_ADD_CATEGORY_DISPLAY:
            return {
                ...state,
                popupAddCategoryDisplay: action.payload
            }
        case SET_POPUP_SELECT_CATEGORY_DISPLAY:
            return {
                ...state,
                popupSelectCategoryDisplay: action.payload
            }
        case SET_INITIAL_STATE:
            return initialState
        default:
            return state

    }
}

export const setCategories = (categories) => ({type: SET_CATEGORIES, payload: categories})
export const addCategory = (category) => ({type: ADD_CATEGORY, payload: category})
export const setSelectedCategory = (category) => ({type: SET_SELECTED_CATEGORY, payload: category})
export const setPopupAddCategoryDisplay = (display) => ({type: SET_POPUP_ADD_CATEGORY_DISPLAY, payload: display})
export const setPopupSelectCategoryDisplay = (display) => ({type: SET_POPUP_SELECT_CATEGORY_DISPLAY, payload: display})