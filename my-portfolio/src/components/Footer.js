import React from 'react';
import '../styles.css';

const footerStyle = {
    'display': 'flex',
    'justify-content': 'center',
    // 'align': 'center',
};

function Footer() {
    return (
        <div>
            <footer style={footerStyle} className="footer"><p>Made with ⚡️ by <a href="https://github.com/jcovington16" target="_blank" rel="noreferrer">
            Joshua Covington</a> aka Jcyber2000</p>
            </footer>
        </div>
    )
}

export default Footer;

