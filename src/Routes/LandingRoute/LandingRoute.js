import React from 'react';
import Hero from '../../components/Hero/Hero';
import Top from '../../components/Top/Top';
import './Welcome.css'

export default function Welcome () {    
    return(
        <div className="Page">
            <Top />
            <Hero />
        </div>
    )
}