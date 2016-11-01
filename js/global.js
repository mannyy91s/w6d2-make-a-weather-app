import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Weather from '../components/Weather.js'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Weather} />
    </Router>
    ,document.getElementById('appContainer')
)
