import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    return (
    <header className="header">
        <nav className="navbar">
            <div className="title-container">
                <img src="/scenic-spokes-logo.png" className="logo-image" alt="scenic spokes logo" height={"80px"} width={"80px"}/>
                <Link to="/" className="title">Scenic Spokes</Link>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav-links">
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                    <NavLink to="/route-map">Scenic Route Map</NavLink>
                    {dropdownOpen && (
                    <ul className="dropdown-menu">
                        <li>
                            <NavLink to="/route-map/north-loop">North Loop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/route-map/coastal-trail">Coastal Trail</NavLink>
                        </li>
                        <li>
                            <NavLink to="/route-map/historic-sites">Historic Sites Tour</NavLink>
                        </li>
                    </ul>
                    )}
                </li>
                <li>
                    <NavLink to="/community">Community Events</NavLink>
                </li>
            </ul>
            </div>
        </nav>
     </header>
    );
};

export default Header;