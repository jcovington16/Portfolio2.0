import React from 'react'

const heroImg = {
    'background-image': `url(../img/58084_JCyber_RK_01.jpg')`
}

function Hero() {
    return (
        <div className="hero-img" style={heroImg}>
            {/* <img src="../img/58085_JCyber_RK_01.jpg" alt="logo" /> */}
        </div>
    )
}

export default Hero;