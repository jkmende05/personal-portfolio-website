import React, { useState } from 'react';
import './navbar.css';

import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom'; // Import NavLink

import { FaHome, FaBars } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineLaptop } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            
            {/* Desktop Navigation */}
            <div className="desktopMenu">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                >
                    <FaHome className="navbarIcon" /> Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                >
                    <IoPersonCircleOutline className="navbarIcon" /> About
                </NavLink>
                <NavLink 
                    to="/experience" 
                    className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                >
                    <AiOutlineLaptop className="navbarIcon" /> Experience
                </NavLink>
                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                >
                    <GoProjectSymlink className="navbarIcon" /> Projects
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                >
                    <MdOutlineEmail className="navbarIcon" /> Contact Information
                </NavLink>
            </div>
            
            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <FaBars />
            </div>
            
            {/* Mobile Dropdown Menu */}
            <ul className={`dropdownMenu ${menuOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                    >
                        <FaHome className="navbarIcon" /> Home
                    </NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                    >
                        <IoPersonCircleOutline className="navbarIcon" /> About
                    </NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink 
                        to="/experience" 
                        className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                    >
                        <AiOutlineLaptop className="navbarIcon" /> Experience
                    </NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                    >
                        <GoProjectSymlink className="navbarIcon" /> Projects
                    </NavLink>
                </li>
                <li onClick={toggleMenu}>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => `desktopMenuListItem ${isActive ? 'activeLink' : ''}`}
                    >
                        <MdOutlineEmail className="navbarIcon" /> Contact Information
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;