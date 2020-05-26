import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {newsApiKey} from '../../config';
import grayIcon from '../../assets/gray-poke-svg.svg';
import pokeIcon from '../../assets/pokesvg.svg';
import './Landing.css';

export default props => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?qInTitle=pokemon&language=en&apiKey=${newsApiKey}`)
        .then(res => {
            let recentArticles = [];
            recentArticles.push(res.data.articles[0], res.data.articles[1], res.data.articles[2]);
            setNewsArticles(recentArticles);
        })
        .catch(err => console.log(err));
    }, [])

    console.log(newsArticles)

    return (
        <div className='landing'>
            <img src={grayIcon} alt='gray icon' className='background-gray-icon'/>
            <section className='link-search-container'>
                <h1>What Pokemon</h1>
                <h1>are you looking for?</h1>
                <input className='search-bar' placeholder='Search Pokemon'/>
                <nav className='landing-link-flex'>
                    <Link to='/pokedex' className='landing-links grass grass-shadow'>
                        <div className='bubble-style'></div>
                        Pokedex
                        <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
                    </Link>
                    <Link to='/pokedex' className='landing-links fire fire-shadow'>
                        <div className='bubble-style'></div>
                        Team Builder
                        <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
                    </Link>
                    <Link to='/pokedex' className='landing-links water water-shadow'>
                        <div className='bubble-style'></div>
                        Items
                        <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
                    </Link>
                    <Link to='/pokedex' className='landing-links electric electric-shadow'>
                        <div className='bubble-style'></div>
                        Pack Builder
                        <img src={pokeIcon} alt='pokeball icon' className='pokeball-icon'/>
                    </Link>
                </nav>
            </section>
            <section className='news-container'>
                <h1>Pokemon News</h1>
                {newsArticles.map((article, i) => (
                    <section className='article-link' key={i}>
                        <h5>{article.title}</h5>
                        <img src={article.urlToImage} alt={article.title}/>
                    </section>
                ))}
            </section>
        </div>
    )
}