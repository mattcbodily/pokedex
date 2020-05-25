import React from 'react';
import './About.css';

export default props => {
    console.log(props)
    return (
        <div className='about'>
            <p>{props.flavorText}</p>
        </div>
    )
}