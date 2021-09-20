import React, { memo } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Home';


export default memo(function UploadRouter() {
    return (
        <BrowserRouter>
             <Switch>
                <Route exact path='/Upload' component={Home}></Route>
                <Route exact path='/Videos' component={Home}></Route>
                <Route exact path='/Home' component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
})
