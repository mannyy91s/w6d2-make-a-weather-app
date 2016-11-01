import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import CMS from '../components/CMS'
import Page from '../components/Page'
import Editor from '../components/Editor'

//you can nest route inside of route and take out the / infron ot page and editor since it takes it from its parent.
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={CMS}>
            <Route path="page" component={Page} />
            <Route path="editor" component={Editor} />
        </Route>
    </Router>

    , document.getElementById('cms')
)
