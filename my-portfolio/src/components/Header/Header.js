import React from 'react';
// import logo from '../../img/logo1.png'

function Header() {
    return (
            <nav>
                <div className="logo">
                   <h3>Jcyber</h3>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
    )
}

export default Header;