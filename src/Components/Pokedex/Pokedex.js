import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Pokedex.css';

export default props => {
    const [pokemonArr, setPokemonArr] = useState([]);

    const getPokemon = async() => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = res.data.results;
        const pokemon = data.map((element, i) => ({
            name: element.name,
            id: i + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
        }))

        setPokemonArr(pokemon);
    }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div>
            <Header />
            <h1>Pokedex</h1>
            <section className='pokedex-flex'>
                {pokemonArr.map((pokemon, i) => (
                    <Link to={`/pokemon/${pokemon.id}`} className={`pokemon-container`} key={i}>
                        <h4 className='pokemon-info'>{pokemon.name}</h4>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </Link>
                ))}
            </section>
        </div>
    )
};