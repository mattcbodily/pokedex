import React from 'react';
import {withRouter} from 'react-router-dom';
import arrow from '../../assets/arrow-left.svg';
import arrowLight from '../../assets/arrow-left-light.svg';
import list from '../../assets/list.svg';
import listLight from '../../assets/list-light.svg';
import './Header.css';

const Header = props => {
    return (
        <div className='header-container'>
            {props.theme === 'light'
            ? (
                <>
                    <img src={arrowLight} alt='navigation-arrow' onClick={props.history.goBack}/>
                    <img src={listLight} alt='filter-list'/>
                </>
            )
            : (
                <>
                    <img src={arrow} alt='navigation-arrow' onClick={props.history.goBack}/>
                    <img src={list} alt='filter-list'/>
                </>
            )}
        </div>
    )
}

export default withRouter(Header);