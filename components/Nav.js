import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { Link } from 'react-router'

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
        <Link to="/">
        <button type="button" className="btn btn-default">Current</button>
        </Link>
        <Link to="/forecast">
        <button type="button" className="btn btn-default">5 Day</button>
        </Link>
        <Link to="/settings">
        <button type="button" className="btn btn-default">Settings</button>
        </Link>
        </div>
    }

}
export default Nav
