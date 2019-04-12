import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className="mi-header">
            <div className="mi-header-content">
                <img src="./images/movie_logo.png" alt="Movie.it Logo" className="mi-logo"/>
                <img src="./images/tmdb_logo.png" alt="TMDBb Logo" className="mi-tmdb-logo"/>
            </div>
        </div>
    )
}

export default Header;