import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import {auth} from "../../API/user"
import Auth from "../Auth/Auth"
import Main from "../Main/Main"
import Footer from "../Footer/Footer"
import "./App.css"

const App = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    return (
        <BrowserRouter>
            {!isAuth ?
                <Switch>
                    <Route exact path="/auth" component={Auth}/>
                    <Redirect to="/auth"/>
                </Switch>
                :
                <div className="app">
                    <Switch>
                        <Route exact path="/main" component={Main}/>
                        <Redirect to="/main"/>
                    </Switch>
                    <Footer/>
                </div>
            }
        </BrowserRouter>
    )
}

export default App