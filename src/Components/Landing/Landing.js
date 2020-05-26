import React from 'react';
import {Link} from 'react-router-dom';
import grayIcon from '../../assets/gray-poke-svg.svg';
import pokeIcon from '../../assets/pokesvg.svg';
import './Landing.css';

export default props => (
    <div className='landing'>
        <img src={grayIcon} alt='gray icon' className='background-gray-icon'/>
        <h1>What Pokemon</h1>
        <h1>are you looking for?</h1>
        <input className='search-icon' placeholder='Search Pokemon'/>
        <nav className='landing-link-flex'>
            <Link to='/pokedex' className='landing-links grass'>
                <div className='bubble-style'></div>
                Pokedex
                <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
            </Link>
            <Link to='/pokedex' className='landing-links fire'>
                <div className='bubble-style'></div>
                Team Builder
                <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
            </Link>
            <Link to='/pokedex' className='landing-links water'>
                <div className='bubble-style'></div>
                Items
                <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
            </Link>
            <Link to='/pokedex' className='landing-links electric'>
                <div className='bubble-style'></div>
                Pack Builder
                <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
            </Link>
        </nav>
    </div>
)