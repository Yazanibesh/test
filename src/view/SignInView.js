import React , {useState, useContext} from 'react'
import { UserContext} from '../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'

export const SignInView = () => {
    const history = useHistory
    // eslint-disable-next-line
    const [username, setUsername] = useState()
    // eslint-disable-next-line
    const [password, setPassword] = useState()
   // eslint-disable-next-line
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    
    const login = () =>{
        setAuthenticatedUser(username)
        localStorage.setItem('username', username)
        history.push('/')
    }
    return (

        <div> 
            <span>Username:</span><input onChange={event => setUsername (event.target.value)}/> <br />
            <span>Password:</span><input type='password' onChange={event => setPassword (event.target.value)}/> <br />
            <button onClick={() => login()}>Login</button>
            
        </div>
    )
}