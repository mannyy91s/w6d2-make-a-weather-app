import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
import Settings from '../components/Settings'
import Nav from '../components/Nav'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'


var savedCity = sessionStorage.getItem('newCity')
sharedState({
  city: savedCity || 'Indianapolis'
})


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Weather} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/settings" component={Settings} />
    </Router>
    ,document.getElementById('appContainer')
)
