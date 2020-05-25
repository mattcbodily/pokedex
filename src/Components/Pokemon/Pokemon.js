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
             <nav>
                 <Link to={`/pokemon/${id}`}>About</Link>
                 <Link to={`/pokemon/${id}/stats`}>Base Stats</Link>
                 <Link to={`/pokemon/${id}/evolution`}>Evolution</Link>
                 <Link to={`/pokemon/${id}/moves`}>Moves</Link>
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