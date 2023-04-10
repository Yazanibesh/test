import React, {useContext} from 'react'
import './NavigationBar.css'
import logotype from '../../shared/images/logotype.svg'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/global/provider/UserProvider'
import { Profile } from '../profile/Profile'
import RoutingPath from '../../routes/RoutingPath'

export const NavigationBar = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return(authenticatedUser) 
        ? <div className='profile'><Profile /> </div>
        : <span onClick={() => history.push (RoutingPath.SignInView)}
        className='SignIn'>Sign in</span>
        

    }
     
    return (
        <div className = "navigationBarWrapper">
            <img onClick={() => history.push (RoutingPath.HomeView)}
            className = "logotype" 
            src ={logotype} 
            alt='Error...'/>
            {displayUserIfAuthenticated()}
       
        </div>


    )

}