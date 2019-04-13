import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import FontAwesome from 'react-fontawesome';
import MovieThumb from '../MovieThumb/MovieThumb';

import './MovieInfo.css';

const MovieInfo = (props) => {
    return (
        <div className="mi-movieinfo"
            style={{
                background: props.movie.backdrop_path ?
                `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')`
                : '#000'
            }}
        >
            <div className="mi-movieinfo-content">
                <div className="mi-movieinfo-thumb">
                    <MovieThumb
                        image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
                        clickable={false}
                    />
                </div>
                <div className="mi-movieinfo-text">
                    <h1>{props.movie.title}</h1>
                    <h3>Plot:</h3>
                    <p>{props.movie.overview}</p>
                    <h3>IMDb rating:</h3>
                    <div className="mi-rating">
                        <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>
                        <p className="mi-score">{props.movie.vote_average}</p>
                    </div>
                    {props.directors.length > 1 ? <h3>Directors:</h3> : <h3>Director:</h3>}
                    {props.directors.map((element, i) => {
                        return <p key={i} className="mi-director">{element.name}</p>
                    })}
                </div>
                <FontAwesome className="fa-film" name="film" size="5x" />
            </div>
        </div>
    )
}

export default MovieInfo;