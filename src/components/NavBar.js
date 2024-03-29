import React from 'react'
import { Link } from "react-router-dom"

const NavBar = ({ isDarkMode, handleDarkMode }) => {
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

    return (
        <header >

            <nav>
                <div className="navigation">
                    <Link className="button" to="/">
                        Home
                    </Link>
                    <Link className="button" to="/movies">
                        Movies
                    </Link>
                    <Link className="button" to="/movie/new">
                        Add New Movie
                    </Link>
              

                    <button className='button' onClick={handleDarkMode}>{buttonText}</button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar