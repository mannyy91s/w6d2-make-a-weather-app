import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
import Nav from '../components/Nav.js'

class Settings extends React.Component{
    constructor(props){
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount(){
        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }
    updatedPageText(e) {
        sharedState({upadtedCity:e.target.value})
        sessionStorage.setItem('newCity', this.state.upadtedCity)
    }
    render(){
        var date = moment().format('MMMM Do YYYY [at] hh:mm a')
        return <div>
        <div className="top-section">
          <h4>{date}</h4>
        </div>
        <div className="bottom-section">
        <input type="text"  onChange={this.updatedPageText}  placeholder="Enter city name"/>
        <br />
        <button className="btn btn-success" onClick={this.updatedPageText}>Save</button>
        </div>
        <Nav />
        </div>
    }
}
export default Settings
