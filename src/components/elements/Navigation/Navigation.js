import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = (props) => {
    return (
        <div className="mi-navigation">
            <div className="mi-navigation-content">
                <Link to="/">
                    <p><strong>Home</strong></p>
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    )
}

export default Navigation;