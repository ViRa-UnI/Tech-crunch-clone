import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-content">
                    <p>© 2022 TechCrunch Clone. All rights reserved.</p>
                    <ul className="footer-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;