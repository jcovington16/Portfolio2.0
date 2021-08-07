import React from 'react';
import '../styles.css';

const footerStyle = {
    'display': 'flex',
    'justify-content': 'center',
    'background': '#333',
    'color':'white'

    // 'align': 'center',
};

const aStyle = {
    'text-decoration': 'none',
    'color': 'inherit',
    
}

function Footer() {
    return (
        <div>
            <footer style={footerStyle} className="footer"><p>Made with ⚡️ by <a style={aStyle} href="https://github.com/jcovington16" target="_blank" rel="noreferrer">
            Joshua Covington</a> aka Jcyber2000</p>
            </footer>
        </div>
    )
}

export default Footer;

