import React, {useState} from 'react'
import './BtnSet2.css'
import { NavLink } from 'react-router-dom'
import TokenService from '../../services/token-service'
import BtnSet1 from '../BtnSet1/BtnSet1'

export default function BtnSet2 () {
    const [logout, setLogout]=useState(false)
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
                    Cactus
                </NavLink>
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