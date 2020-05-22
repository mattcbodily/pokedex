import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.css';

export default props => (
    <div className='landing'>
        <h1>What Pokemon</h1>
        <h1>are you looking for?</h1>
        <Link to='/pokedex'>
            <button>Pokedex</button>
        </Link>
    </div>
)