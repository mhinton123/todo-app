import React from "react";
import MoonIcon from '../images/icon-moon.svg'
import SunIcon from '../images/icon-sun.svg'

export default function Header(props) {
    
    function toggleDarkTheme() {
        props.setIsDarkTheme(prev => !prev)
    }
    
    return (
        <header>
        <h1>TODO</h1>
        <button id="theme-icon">
            <button className="btn-wr" onClick={toggleDarkTheme}>
                <img src={props.isDarkTheme ? SunIcon : MoonIcon} alt="moon icon" />
            </button>
        </button>
        </header>
    )
}