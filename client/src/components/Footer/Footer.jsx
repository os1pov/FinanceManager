import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../../reducers/userReducer"
import "./Footer.css"

const Footer = () => {
    const userLogin = useSelector(state => state.user.currentUser.userLogin)
    const dispatch = useDispatch()

    return(
        <div className="footer">
            <div>{userLogin}</div>
            <div>
                <button onClick={() => dispatch(logout())}>Выйти</button>
            </div>
        </div>
    )
}

export default Footer