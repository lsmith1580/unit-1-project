import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveringRoutesLink, setHoveringRoutesLink] = useState(false);
    const [hoveringRoutesDropdown, setHoveringRoutesDropdown] = useState(false);
    
    return (
    <header className="header">
        <nav className="navbar">
            <div className="title-container">
                <img src="/scenic-spokes-logo.png" className="logo-image" alt="scenic spokes logo" height={"80px"} width={"80px"}/>
                <Link to="/" className="title">Scenic Spokes</Link>
                <div className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="nav-links">
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink onMouseEnter={() => setHoveringRoutesLink(true)} onMouseLeave={() => setHoveringRoutesLink(false)} to="/route-map">Sturgis Route Map</NavLink>
                    {(hoveringRoutesLink || hoveringRoutesDropdown) && (
                    <ul className="routes-dropdown-menu"onMouseEnter={() => setHoveringRoutesDropdown(true)} onMouseLeave={() => setHoveringRoutesDropdown(false)}>
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