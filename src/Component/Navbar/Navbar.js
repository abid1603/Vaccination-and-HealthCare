
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
        return (
            <nav className='navbar'>
                <h3 className="logo">Logo</h3>
                <ul className={isMobile? "nav-links-mobile":"nav-links"}
                onClick={() =>setIsMobile(false)}
                >
                    <Link to="/home" className="home">
                        <li>Home</li>
                    </Link>

                    <Link to="/Bvaccine" className="Bvaccine">
                        <li>Baby Vaccine</li>
                    </Link>

                    <Link to="/Wvaccine" className="Wvaccine">
                        <li>Pregnant Women Vaccine</li>
                    </Link>

                    <Link to="/Hospital" className="Hospital">
                        <li>Near By Hospital</li>
                    </Link>

                    <Link to="/Htips" className="Htips">
                        <li>Health tips</li>
                    </Link>

                    <Link to="/Contact" className="Contact">
                        <li>Contact Us</li>
                    </Link>
                </ul>
                    <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? (<i className="fas fa-times"></i>
                        ) : (
                        <i className="fas fa-bars"></i>)}
                    </button>

            </nav>
        );
    }

export default Navbar;