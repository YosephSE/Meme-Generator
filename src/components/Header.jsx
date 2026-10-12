import React from "react";
import logo from '../assets/logo.png'
import './Header.css'

function Header(){
    return(
        <div className="header">
            <nav className="navbar">
                <div className="right">
                <img src={logo} alt="Logo img" className="logo-img"/>
                <p className="logo-text">Meme Generator</p>
                </div>
                <p>React Course - Project 3</p>
            </nav>
        </div>
    )
}

export default Header