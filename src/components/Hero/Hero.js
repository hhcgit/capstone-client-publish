import React from 'react';
import './Hero.css';



export default class Hero extends React.Component{

    render(){
        return (
            <section className="Hero">
                <div className="Hero-inner">
                <h1>Cactus Head</h1>
                <h2>The site for Amateur Cactus Lovers.</h2>
                </div>
            </section>
        )
    }
}