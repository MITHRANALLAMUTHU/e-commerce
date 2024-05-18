import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
        <header className="header">
            
                <div className="header-content">
                    <h1 className="website-name">Product Review Platform</h1>
                    <div className="nav-buttons">
                        <Link to="/login" className="nav-button">Login</Link>
                        <Link to="/signup" className="nav-button">Signup</Link>
                    </div>

                    
                </div>
            
        </header>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Welcome to Happieee Shoppingg</h1>
        </>
    );
};

export default Header;