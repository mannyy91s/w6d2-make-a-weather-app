import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
import Nav from '../components/Nav.js'


class Forecast extends React.Component {
    constructor(props){
        super(props)
        classAutoBind(this)
        this.state = sharedState()
    }
    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Indianapolis&cnt=5&appid=66c9a930e7ad9244acfdc66772fa1c34')
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                city: data.city.name,
                temp: Math.round(data.list[0].temp.max * (9/5) - 459.67) + '°',
                cond: data.list[0].weather[0].description,
                icon: data.list[0].weather[0].id,
            })
            console.log(data)
        })
        attachSharedState(this)
    }
    render(){
        var date = moment().format('MMMM Do YYYY [at] hh:mm a')
        return <div>
        <div className="top-section">
          <h4>{this.state.city}</h4>
          <p>{date}</p>
        </div>
        <div className="bottom-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">{this.state.temp}</div>
                    <div className="col-sm-2">{this.state.icon}</div>
                    <div className="col-sm-8">Monday</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">{this.state.temp}</div>
                    <div className="col-sm-2">{this.state.icon}</div>
                    <div className="col-sm-8">Tuesday</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">{this.state.temp}</div>
                    <div className="col-sm-2">{this.state.icon}</div>
                    <div className="col-sm-8">Wednesday</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">{this.state.temp}</div>
                    <div className="col-sm-2">{this.state.icon}</div>
                    <div className="col-sm-8">Thursday</div>
                </div>
                <div className="row">
                    <div className="col-sm-2">{this.state.temp}</div>
                    <div className="col-sm-2">{this.state.icon}</div>
                    <div className="col-sm-8">Friday</div>
                </div>
            </div>
        </div>
        <div>
        <Nav />
        </div>
        </div>
    }
}
export default Forecast
