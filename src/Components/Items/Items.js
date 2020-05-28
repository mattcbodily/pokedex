import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import loading from '../../HOCs/loading';
import grayIcon from '../../assets/gray-poke-svg.svg';
import pokeIcon from '../../assets/pokesvg.svg';
import pokeLoading from '../../assets/pokeball-loading.png';
import './Items.css';

const Items = props => {
    let [items, setItems] = useState([]);

    const getItems = async() => {
        const allItems = [];
        for(let i = 1; i <= 100; i++){
            let item = await axios.get(`https://pokeapi.co/api/v2/item/${i}`)
            allItems.push(item.data);
        }
        setItems(allItems);
        props.loadingObj.handleLoading();
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className='items'>
            {props.loadingObj.loading
            ? (<>
                <img src={pokeLoading} alt='loading' className='loading-image'/>
                <h4 className='loading-prompt'>Loading...</h4>
               </>)
            : (<>
                <img src={grayIcon} alt='large pokeball' className='gray-icon'/>
                <Header />
                <h1>Items</h1>
                <div className='item-flex'>
                    {items.map((item, i) => (
                        <div className='item' key={i}>
                            <div className='item-bubble-style'></div>
                            <img src={item.sprites.default} alt={item.name} className='item-image'/>
                            <h4>{item.name}</h4>
                            <img src={pokeIcon} alt='Pokeball' className='item-background'/>
                        </div>
                    ))}
                </div>
               </>)}
        </div>
    )
}

export default loading(Items);