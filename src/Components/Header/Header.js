import React from 'react';
import arrow from '../../assets/arrow-left.svg';
import list from '../../assets/list.svg';
import './Header.css';

export default props => (
    <div className='header-container'>
        <img src={arrow} alt='navigation-arrow'/>
        <img src={list} alt='filter-list'/>
    </div>
)