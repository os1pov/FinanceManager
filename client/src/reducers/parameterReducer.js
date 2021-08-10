const SET_MODE = "SET_MODE"
const SET_SELECTED_PERIOD_FOR_WEB = "SET_SELECTED_PERIOD_FOR_WEB"
const SET_SORT_PERIOD = "SET_SORT_PERIOD"
const SET_POPUP_SELECT_PERIOD_DISPLAY = "SET_POPUP_SELECT_PERIOD_DISPLAY"
const SET_INITIAL_STATE = "SET_INITIAL_STATE"

const initialState = {
    mode: "Expenses",
    currentDate: new Date().toISOString().substring(0, 10),
    selectedPeriod: "",
    sortPeriod: {
        firstDate: "",
        lastDate: ""
    },
    popupSelectPeriodDisplay: "none"
}

export const parameterReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case SET_SELECTED_PERIOD_FOR_WEB:
            return {
                ...state,
                selectedPeriod: action.payload
            }
        case SET_SORT_PERIOD:
            return {
                ...state,
                sortPeriod: action.payload
            }
        case SET_POPUP_SELECT_PERIOD_DISPLAY:
            return {
                ...state,
                popupSelectPeriodDisplay: action.payload
            }
        case SET_INITIAL_STATE:
            return initialState
        default:
            return state

    }
}

export const setMode = (mode) => ({type: SET_MODE, payload: mode})
export const setSelectedPeriodForWeb = (period) => ({type: SET_SELECTED_PERIOD_FOR_WEB, payload: period})
export const setSortPeriod = (firstDate, lastDate) => ({type: SET_SORT_PERIOD, payload: {firstDate, lastDate}})
export const setPopupSelectPeriodDisplay = (display) => ({type: SET_POPUP_SELECT_PERIOD_DISPLAY, payload: display})

export const setSelectedPeriod = (period, selectedFirstDate, selectedLastDate) => {
    return dispatch => {
        const callbackMonth = (num, index) => {
            if (index === 1) {
                if (num[0] === "0") {
                    return "0" + (+num[1] + 1)
                } else {
                    return num + 1
                }
            } else {
                return num
            }
        }

        let firstDate = new Date()
        let lastDate = new Date()
        switch (period) {
            case "currentDay":
                const currentDay = firstDate.toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric' })
                dispatch(setSelectedPeriodForWeb(currentDay))
                lastDate.setDate(firstDate.getDate() + 1)
                firstDate = firstDate.toISOString().substring(0, 10)
                lastDate = lastDate.toISOString().substring(0, 10)
                dispatch(setSortPeriod(firstDate, lastDate))
                break
            case "currentWeek":
                if (firstDate.getDay() === 0) {
                    firstDate.setDate(firstDate.getDate() - 6)
                } else {
                    firstDate.setDate(firstDate.getDate() - firstDate.getDay() + 1)
                    lastDate.setDate(firstDate.getDate() + 6)
                }
                const currentWeek = firstDate.toLocaleDateString("ru-RU", {month: 'long', day: 'numeric'})  + " - " + lastDate.toLocaleDateString("ru-RU", {month: 'long', day: 'numeric'})
                dispatch(setSelectedPeriodForWeb(currentWeek))
                firstDate = firstDate.toISOString().substring(0, 10)
                lastDate = lastDate.toISOString().substring(0, 10)
                dispatch(setSortPeriod(firstDate, lastDate))
                break
            case "currentMonth":
                const months = ["Январь",`Февраль`,"Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь", "Декабрь"]
                const currentMonth = months[firstDate.getMonth()] + " " + firstDate.getFullYear()
                dispatch(setSelectedPeriodForWeb(currentMonth))
                firstDate = firstDate.toISOString().substring(0, 7)
                lastDate = lastDate.toISOString().substring(0, 7)
                    .split("-")
                    .map(callbackMonth)
                    .join("-")
                dispatch(setSortPeriod(firstDate, lastDate))
                break
            case "currentYear":
                const currentYear = firstDate.getFullYear()
                dispatch(setSelectedPeriodForWeb(currentYear))
                firstDate = firstDate.toISOString().substring(0, 4)
                lastDate = +firstDate + 1
                dispatch(setSortPeriod(firstDate, lastDate))
                break
            case "selectedPeriod":
                let selectedPeriod = ""
                let chunkFirstDate = ""
                let chunkLastDate = ""
                if (selectedFirstDate <= selectedLastDate) {
                    dispatch(setSortPeriod(selectedFirstDate, selectedLastDate))
                    chunkFirstDate = selectedFirstDate.split("-")
                    chunkLastDate = selectedLastDate.split("-")
                } else {
                    dispatch(setSortPeriod(selectedLastDate, selectedFirstDate))
                    chunkFirstDate = selectedLastDate.split("-")
                    chunkLastDate = selectedFirstDate.split("-")
                }
                firstDate = new Date(chunkFirstDate[0], chunkFirstDate[1] -1, chunkFirstDate[2]).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric' })
                lastDate = new Date(chunkLastDate[0], chunkLastDate[1] -1, chunkLastDate[2]).toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric' })
                firstDate === lastDate
                    ? selectedPeriod = firstDate
                    : selectedPeriod = firstDate + " - " + lastDate
                dispatch(setSelectedPeriodForWeb(selectedPeriod))
                break
            default:
        }
    }
}