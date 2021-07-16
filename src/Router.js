import React, { memo } from 'react'
import {Switch, Route } from 'react-router-dom';
import Download from './Download/Download';
import Home from './Home';

export default memo(function Router() {
    return (
      <Switch>
        <Route exact path='/Home' component={Home}></Route>
        <Route exact path='/Download' component={Download}></Route>
      </Switch>
    )
})
