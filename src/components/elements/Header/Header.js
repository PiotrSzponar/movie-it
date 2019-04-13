import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="mi-header">
            <div className="mi-header-content">
                <Link to ="/">
                    <img src="./images/movie_logo.png" alt="Movie.it Logo" className="mi-logo"/>
                </Link>
                <img src="./images/tmdb_logo.png" alt="TMDBb Logo" className="mi-tmdb-logo"/>
            </div>
        </div>
    )
}

export default Header;