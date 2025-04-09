import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

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
                <Link to="/" className="desktopMenuListItem">
                    <FaHome className="icon" /> Home
                </Link>
                <Link to="/about" className="desktopMenuListItem">
                    <IoPersonCircleOutline className="icon" /> About
                </Link>
                <Link to="/experience" className="desktopMenuListItem">
                    <AiOutlineLaptop className="icon" /> Experience
                </Link>
                <Link to="/projects" className="desktopMenuListItem">
                    <GoProjectSymlink className="icon" /> Projects
                </Link>
                <Link to="/contact" className="desktopMenuListItem">
                    <MdOutlineEmail className="icon" /> Contact Information
                </Link>
            </div>
            
            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                <FaBars />
            </div>
            
            {/* Mobile Dropdown Menu */}
            <ul className={`dropdownMenu ${menuOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}>
                    <Link to="/" className="desktopMenuListItem">
                        <FaHome className="icon" /> Home
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/about" className="desktopMenuListItem">
                        <IoPersonCircleOutline className="icon" /> About
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/experience" className="desktopMenuListItem">
                        <AiOutlineLaptop className="icon" /> Experience
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/projects" className="desktopMenuListItem">
                        <GoProjectSymlink className="icon" /> Projects
                    </Link>
                </li>
                <li onClick={toggleMenu}>
                    <Link to="/contact" className="desktopMenuListItem">
                        <MdOutlineEmail className="icon" /> Contact Information
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;