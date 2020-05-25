import React from 'react';
import './About.css';

const About = props => (
    <div className='pokemon-about'>
        <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name} className='pokemon-about-image'/>
    </div>
)

export default About;