import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = ({ isDarkMode, handleDarkMode }) => {
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";
    return (
        <header >
            <nav>
                <div className="navigation">
                    <NavLink className="button " to="/">
                        Home
                    </NavLink>
                    <NavLink className="button" to="/movies">
                        Movies
                    </NavLink>

                    <NavLink className="button" to="/movie/new">
                        Add New Movie
                    </NavLink>
                    <button className='button' onClick={handleDarkMode}>{buttonText}</button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar