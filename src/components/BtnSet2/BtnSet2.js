import React, {useState, useContext} from 'react'
import './BtnSet2.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../../services/token-service'
import BtnSet1 from '../BtnSet1/BtnSet1'
import UserContext from '../../contexts/UserContext'

export default function BtnSet2 () {
    const [logout, setLogout]=useState(false)
    const userContext = useContext(UserContext)
    const handleLogOut= (ev) => {
        ev.preventDefault()
        TokenService.clearAuthToken()
        setLogout(true)
    }
    function renderDisplay(){
        if (logout){
            return <BtnSet1 />
        }
        return (
            <nav className="Menu">
            <div className="Header__Btn">
                
                <NavLink exact to="/" className="Nav-Btn">
                    Home
                </NavLink>
                <NavLink to="/blog" className="Nav-Btn">
                    Search Plant
                </NavLink>
                <span className="Display-User">{userContext.user.name}</span>
                <NavLink to="/" className="Nav-Btn" onClick={handleLogOut}>
                    Logout
                </NavLink>
            </div>
        </nav>
        )
        
    }
    return(
        <>
            {renderDisplay()}
        </>
    )
}