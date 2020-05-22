import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Pokemon.css';

export default props => {
    let [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
    <div>{pokemon.name}</div>
    )
}