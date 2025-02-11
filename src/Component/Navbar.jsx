// src/Navbar.js
import React from 'react';
import './Navbar.css'; // For the CSS file styling
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>MyApp</h1>
            </div>
            <div className="nav-links">
                <a href="/home" className="nav-item">Home</a>
                <a href="/about" className="nav-item">About</a>
                <a href="/contact" className="nav-item">Contact</a>
                {
                    isAuthenticated && (
                        <div className='mr-1 px-2 py-1'style={{color: "red", background: "yellow", borderRadius:"5px" }}>
                            <h2>{user.name}</h2>
                        </div>
                        )
                }
                {
                    isAuthenticated ? (
                        <button className='auth-button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    ) : (
                        <button className='auth-button' onClick={() => loginWithRedirect()}>Log In</button>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;
