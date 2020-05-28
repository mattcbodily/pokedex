import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import loading from '../../HOCs/loading';
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

    console.log(items)

    return (
        <div>
            {props.loadingObj.loading
            ? (<>
                <img src={pokeLoading} alt='loading' className='loading-image'/>
                <h4 className='loading-prompt'>Loading...</h4>
               </>)
            : (<>
                <Header />
                <h1>Items</h1>
                <div className='item-flex'>
                    {items.map((item, i) => (
                        <div className='item'>
                            <img src={item.sprites.default} alt={item.name}/>
                            <h4>{item.name}</h4>
                        </div>
                    ))}
                </div>
               </>)}
        </div>
    )
}

export default loading(Items);