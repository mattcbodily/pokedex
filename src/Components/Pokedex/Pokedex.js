import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
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

    console.log(pokemonArr)

    return (
        <div>
            <Header />
            <h1>Pokedex</h1>
            <section className='pokedex-flex'>
                {pokemonArr.map((pokemon, i) => (
                    <div className={`pokemon-container`}>
                        <div className='pokemon-info'>
                            <h4>{pokemon.name}</h4>
                            {/* {pokemon.types.map((type, i) => (
                                <div className='pokemon-type' key={i}>
                                    {type.name}
                                </div>
                            ))} */}
                        </div>
                        <img src={pokemon.image} alt={pokemon.name}/>
                    </div>
                ))}
            </section>
        </div>
    )
};