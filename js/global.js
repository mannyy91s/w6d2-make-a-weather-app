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

window.path = window.location.href.includes('github') ? '/w6d2-make-a-weather-app' : ''

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={path + "/"} component={Weather} />
        <Route path={path + "/forecast"} component={Forecast} />
        <Route path={path + "/settings"} component={Settings} />
    </Router>
    ,document.getElementById('appContainer')
)
