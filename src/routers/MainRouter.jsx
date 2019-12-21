import React from 'react'
import {Switch, Route} from 'react-router-dom'
import index from '../pages/Index'
export default function MainRouter() {
    return (
        <Switch>
            <Route path="/" component={index} />
        </Switch>
    )
}