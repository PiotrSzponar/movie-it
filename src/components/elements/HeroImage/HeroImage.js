import React from 'react';
import './HeroImage.css';

const HeroImage = (props) => {
    return (
        <div className="mi-heroimage"
            style={{
                background:
                    `linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0) 30%,
                        rgba(0, 0, 0, 0.7) 70%),
                    url('${props.image}'),
                    #1c1c1c`
            }}
        >
            <div className="mi-heroimage-content">
                <div className="mi-heroimage-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;