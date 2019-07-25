import React from 'react';
import './BtnSet1.css';
import { NavLink } from 'react-router-dom';

export default class BtnSet1 extends React.Component{
    render(){
        return(
            <nav className="Menu">
                <div className="Header__Btn">
                    <NavLink exact to="/" className="Nav-Btn">
                        Home
                    </NavLink>
                    {/* <NavLink to="/blog" className="Nav-Btn">
                        Cactus
                    </NavLink> */}
                    <NavLink to="/login" className="Nav-Btn">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="Nav-Btn">
                        Register
                    </NavLink>
                </div>
            </nav>
        )
    }
}