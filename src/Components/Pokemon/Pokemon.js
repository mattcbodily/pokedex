import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom';
import Header from '../Header/Header';
import About from './About/About';
import Stats from './Stats/Stats';
import Evolution from './Evolution/Evolution';
import Moves from './Moves/Moves';
import loading from '../../HOCs/loading';
import pokeball from '../../assets/pokeball-loading.png';
import './Pokemon.css';

const Pokemon = props => {
    let [pokemon, setPokemon] = useState({});
    const {id} = props.match.params;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
        .then(res => {
            setPokemon(res.data);
            props.loadingObj.handleLoading()
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
        {props.loadingObj.loading
        ? (<>
            <img src={pokeball} alt='loading' className='loading-image'/>
            <h4>Loading...</h4>
           </>)
        : (<div className={`pokemon ${pokemon.types.find(element => element.slot === 1).type.name}`}>
            <Header />
            <h1>{pokemon.name}</h1>
            <div className='pokemon-about'>
             <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-about-image'/>
             <nav className='link-flex'>
                 <Link to={`/pokemon/${id}`} className={`about-links ${props.location.pathname === ('/pokemon/' + id) ? 'active-link' : null}`}>About</Link>
                 <Link to={`/pokemon/${id}/stats`} className={`about-links ${props.location.pathname.includes('stats') ? 'active-link' : null}`}>Base Stats</Link>
                 <Link to={`/pokemon/${id}/evolution`} className={`about-links ${props.location.pathname.includes('evolution') ? 'active-link' : null}`}>Evolution</Link>
                 <Link to={`/pokemon/${id}/moves`} className={`about-links ${props.location.pathname.includes('moves') ? 'active-link' : null}`}>Moves</Link>
             </nav>
             <Switch>
                <Route exact path='/pokemon/:id' component={About}/>
                <Route path='/pokemon/:id/stats' component={Stats}/>
                <Route path='/pokemon/:id/evolution' component={Evolution}/>
                <Route path='/pokemon/:id/moves' component={Moves}/>
             </Switch>
            </div>
           </div>)}
        </div>
    )
}

export default loading(Pokemon);