import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import pokeball from '../../assets/pokeball-loading.png';
import './Pokedex.css';

export default props => {
    const [pokemonArr, setPokemonArr] = useState([]),
          [loading, setLoading] = useState(true);

    const getAllPokemon = async() => {
        let allPokemon = [];
        for(let i = 1; i <= 151; i++){
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            allPokemon.push(pokemon.data);
        }
        setPokemonArr(allPokemon);
        setLoading(false);
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <div>
            {loading
            ? (<>
                <img src={pokeball} alt='loading' className='loading-image'/>
                <h4 className='loading-prompt'>Loading...</h4>
               </>)
            : <>
                <Header />
                <h1>Pokedex</h1>
                <section className='pokedex-flex'>
                    {pokemonArr.map((pokemon, i) => (
                        <Link to={`/pokemon/${pokemon.id}`} className={`pokemon-container ${pokemon.types.find(element => element.slot === 1).type.name}`} key={i}>
                            <div className='pokemon-info'>
                                <h4>{pokemon.name}</h4>
                                {pokemon.types.sort((a, b) => a.slot - b.slot).map((type, i) => (
                                    <div key={i} className={`pokemon-type ${pokemon.types.find(element => element.slot === 1).type.name}-type`}>{type.type.name}</div>
                                ))}
                            </div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        </Link>
                    ))}
                </section>
              </>}
        </div>
    )
};