import React , {useEffect , useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ReportView} from '../view/ReportView'
import {HomeView} from '../view/HomeView'
import {SignInView} from  '../view/SignInView'
import {UserContext} from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath' 


export const  Routing = (props) => {
    // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }
    
    const blockRouteNotIfAuthenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }
    

    const checkIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

useEffect (() =>  {
    checkIfUserIsAuthenticatedInBrowser()

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return (

        <Router>
            {props.children}
            <Switch>
                <Route exact path = {RoutingPath.ReportView} component = {ReportView} />
                <Route exact path = {RoutingPath.SignInView} component = {blockRouteIfAuthenticated(SignInView)}  />
                <Route exact path = {RoutingPath.ProfileView} component = {blockRouteNotIfAuthenticated(ProfileView)}  />
                <Route exact path = {RoutingPath.SettingsView} component = {blockRouteNotIfAuthenticated(SettingsView)}  />
                <Route component ={HomeView} />          
            </Switch>
        </Router>
    )
}    


/* logic :const blockRouteIfAuthenticated = () => {
    return condition ? trueStatement : FalseStatement 
} */