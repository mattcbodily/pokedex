import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Pokedex from './Components/Pokedex/Pokedex';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/pokedex' component={Pokedex}/>
    </Switch>
)