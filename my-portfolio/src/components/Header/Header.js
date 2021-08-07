import React from 'react';
import logo from '../../img/logo1.png'

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img scr={logo} alt="logo"></img>
                </div>
                <ul>
                    <li className="nav-links"><a href="/">Home</a></li>
                    <li className="nav-links"><a href="/">About</a></li>
                    <li className="nav-links"><a href="/">Projects</a></li>
                    <li className="nav-links"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;