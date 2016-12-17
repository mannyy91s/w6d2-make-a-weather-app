import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
import Nav from '../components/Nav.js'

class Weather extends React.Component{
    constructor(props){
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
        console.log(this.state.pageText)
        if(sessionStorage.getItem('newCity') === null){
            fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis,us&appid=66c9a930e7ad9244acfdc66772fa1c34')
            .then(response => response.json())
            .then((data)=>{
                this.setState({
                    city: data.name,
                    temp: Math.round(data.main.temp * (9/5) - 459.67) + '°',
                    cond: data.weather[0].description
                })
            })
        } else {
            fetch('http://api.openweathermap.org/data/2.5/weather?q=' + sessionStorage.getItem('newCity') + ',us&appid=66c9a930e7ad9244acfdc66772fa1c34')
            .then(response => response.json())
            .then((data)=>{
                this.setState({
                    city: data.name,
                    temp: Math.round(data.main.temp * (9/5) - 459.67) + '°',
                    cond: data.weather[0].description
                })
            })
        }

        attachSharedState(this)
    }
    componentWillUnmount() {
        detachSharedState(this)
    }

    render() {
        var date = moment().format('MMMM Do YYYY [at] hh:mm A')
        return <div>
        <div className="top-section">
          <h4>{this.state.city}</h4>
          <p>{date}</p>
        </div>
        <div className="bottom-section">
          <h1>{this.state.temp}</h1>
          <p>{this.state.cond}</p>
        </div>
        <div>
        <Nav />
        </div>
        </div>
    }
}
 export default Weather
