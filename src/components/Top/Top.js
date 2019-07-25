import React from 'react';
import './Top.css';
import BtnSet1 from '../BtnSet1/BtnSet1';
import BtnSet2 from '../BtnSet2/BtnSet2';
import TokenService from '../../services/token-service'

export default function Top () {
    const pic=require('../../img-store/logo.png')
    return (
        <header>
            <div className="Container">
                <div className="Logo-wrap">
                    <div className="Table-wrap">
                        <img src={pic} alt="logo" className="Logo" />
                    </div>
                </div>

                {TokenService.hasAuthToken()?<BtnSet2 />:<BtnSet1 />}
            </div>
         </header>
        )
    
}