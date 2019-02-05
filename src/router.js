import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home/Home';

export default (
  <Switch>
    <Route to='/' component={Home}/>
  </Switch>
)