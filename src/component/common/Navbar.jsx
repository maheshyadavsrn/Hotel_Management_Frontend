import React, { useRef } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import ApiService from '../../service/ApiService';
import "./Navbar.css";

function Navbar() {
    const isAuthenticated = ApiService.isAuthenticated();
    const isAdmin = ApiService.isAdmin();
    const isUser = ApiService.isUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        const isLogout = window.confirm('Are you sure you want to logout this user?');
        if (isLogout) {
            ApiService.logout();
            navigate('/home');
        }
    };

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <header>
            <div className="navbar-brand">
                <NavLink to="/home">Tech Hotel</NavLink>
            </div>
            <nav ref={navRef} className="navbar">
                <ul className="navbar-ul">
                    <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                    <li><NavLink to="/rooms" activeclassname="active">Rooms</NavLink></li>
                    <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                    {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                    {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                    {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                    {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                    {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
                </ul>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    
                </button>
            </nav>

            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
