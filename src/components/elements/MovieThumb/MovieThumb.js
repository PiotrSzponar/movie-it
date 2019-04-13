import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
        <div className="mi-moviethumb">
            {props.clickable ?
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="Movie Thumbnail"/>
                </Link>
                :
                <img src={props.image} alt="Movie Thumbnail"/>
            }
        </div>
    )
}

export default MovieThumb;