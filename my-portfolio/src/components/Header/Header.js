import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h4>Jcyber</h4>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;