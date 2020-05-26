import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import loading from '../../HOCs/loading';
import axios from 'axios';
import {Link} from 'react-router-dom';
import pokeLoading from '../../assets/pokeball-loading.png';
import pokeIcon from '../../assets/pokesvg.svg';
import grayIcon from '../../assets/gray-poke-svg.svg';
import './Pokedex.css';

const Pokedex = props => {
    const [pokemonArr, setPokemonArr] = useState([])

    const getAllPokemon = async() => {
        let allPokemon = [];
        for(let i = 1; i <= 151; i++){
            let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            allPokemon.push(pokemon.data);
        }
        setPokemonArr(allPokemon);
        props.loadingObj.handleLoading();
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <div className='pokedex'>
            {props.loadingObj.loading
            ? (<>
                <img src={pokeLoading} alt='loading' className='loading-image'/>
                <h4 className='loading-prompt'>Loading...</h4>
               </>)
            : <>
                <img src={grayIcon} alt='large pokeball' className='gray-icon'/>
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
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} className='poke-image'/>
                            <img src={pokeIcon} alt='pokeball' className='background-icon'/>
                        </Link>
                    ))}
                </section>
              </>}
        </div>
    )
}

export default loading(Pokedex);