import React from 'react';
import {withRouter} from 'react-router-dom';
import arrow from '../../assets/arrow-left.svg';
import list from '../../assets/list.svg';
import './Header.css';

const Header = props => {
    return (
        <div className='header-container'>
            <img src={arrow} alt='navigation-arrow' onClick={props.history.goBack}/>
            <img src={list} alt='filter-list'/>
        </div>
    )
}

export default withRouter(Header);