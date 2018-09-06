import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';

export default <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" component={Home}/>
</Switch>