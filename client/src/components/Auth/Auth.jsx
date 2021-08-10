import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {login, registration} from "../../API/user"
import Input from "../../utils/Input/Input"
import "./Auth.css"

const Auth = () => {
    const [isUserExists, setIsUserExists] = useState(true)
    const [userLogin, setUserLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const setModeHandler = (boolean) => {
        setIsUserExists(boolean)
        setUserLogin("")
        setPassword("")
    }

    return (
        <div className="auth__window">
            <div className="auth__content">
                <div className={isUserExists ? "auth__header__login" : "auth__header__registration"}>
                    <div onClick={() => setModeHandler(true)}>Войти</div>
                    <div onClick={() => setModeHandler(false)}>Регистрация</div>
                </div>
                <Input type="text" maxLength={20} value={userLogin} setValue={setUserLogin}
                       placeholder="Введите login..."
                />
                <Input type="password" maxLength={20} value={password} setValue={setPassword}
                       placeholder="Введите пароль..."
                />
                <div className="window__create">
                    {isUserExists &&  <button onClick={() => dispatch(login(userLogin,password))}>Войти</button>}
                    {!isUserExists &&  <button onClick={() => dispatch(registration(userLogin,password))}>Регистрация</button>}
                </div>
            </div>
        </div>
    )
}

export default Auth