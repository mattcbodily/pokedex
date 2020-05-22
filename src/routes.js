import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Pokedex from './Components/Pokedex/Pokedex';
import Pokemon from './Components/Pokemon/Pokemon';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/pokedex' component={Pokedex}/>
        <Route path='/pokemon/:id' component={Pokemon}/>
    </Switch>
)