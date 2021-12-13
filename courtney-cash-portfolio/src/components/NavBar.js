import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return(
        <div>
            <Link to="/">
                <h1>Courtney Cash</h1>
            </Link>
            <Link to="/projects">
                <h1>Projects</h1>
            </Link>
            <Link to="/contact">
                <h1>Contact Me</h1>
            </Link>

        </div>
    )
}

export default NavBar;