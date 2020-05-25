import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header/Header';
import About from './About/About';
import loading from '../../HOCs/loading';
import pokeball from '../../assets/pokeball-loading.png';
import './Pokemon.css';

const Pokemon = props => {
    let [pokemon, setPokemon] = useState({});

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
            <About pokemon={pokemon}/>
           </div>)}
        </div>
    )
}

export default loading(Pokemon);