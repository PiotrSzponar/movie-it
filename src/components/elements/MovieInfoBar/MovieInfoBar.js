import React from 'react';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers';

import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
    return (
        <div className="mi-movieinfobar">
            <div className="mi-movieinfobar-content">
                <div className="mi-movieinfobar-content-col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" />
                    <span className="mi-movieinfobar-info">Running time: {calcTime(props.time)}</span>
                </div>
                <div className="mi-movieinfobar-content-col">
                    <FontAwesome className="fa-budget" name="money" size="2x" />
                    <span className="mi-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
                </div>
                <div className="mi-movieinfobar-content-col">
                    <FontAwesome className="fa-revenue" name="ticket" size="2x" />
                    <span className="mi-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieInfoBar;