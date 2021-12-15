import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div className="NavBarContainer">
            <div className="NavBarTitle">
                <Link to="/">
                    <h3>Courtney Cash</h3>
                </Link>
            </div>
            <div className="NavBarLinks">
                <Link to="/aboutme">
                    <h3>About Me</h3>
                </Link>
                <Link to="/projects">
                    <h3>Projects</h3>
                </Link>
                <Link to="/contact">
                    <h3>Contact Me</h3>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;