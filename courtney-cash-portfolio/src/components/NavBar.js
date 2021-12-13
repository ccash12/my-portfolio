import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div className="NavBarContainer">
            <Link to="/">
                <h3>Courtney Cash</h3>
            </Link>
            <Link to="/projects">
                <h3>Projects</h3>
            </Link>
            <Link to="featured">
                <h3>Featured</h3>
            </Link>
            <Link to="/contact">
                <h3>Contact Me</h3>
            </Link>

        </div>
    )
}

export default NavBar;