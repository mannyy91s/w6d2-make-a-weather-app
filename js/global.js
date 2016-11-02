import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
import Nav from '../components/Nav'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Weather} />
        <Route path="/forecast" component={Forecast} />
    </Router>
    ,document.getElementById('appContainer')
)
