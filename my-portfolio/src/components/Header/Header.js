import React from 'react';
// import logo from '../../img/logo1.png'

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //Animate Links
    navLinks.forEach((link) =>{
        
    })
}

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
                <div className="burger" onclick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
    )
}

export default Header;