import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutoBind'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
import { Link } from 'react-router'
import Nav from '../components/Nav.js'


class Forecast extends React.Component {
    constructor(props){
        super(props)
        classAutoBind(this)
        this.state = {
            days: [],
            city: ''
        }
    }
    componentDidMount() {
        if(sessionStorage.getItem('newCity') === null) {
            fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Indianapolis&cnt=5&appid=66c9a930e7ad9244acfdc66772fa1c34')
            .then(response => response.json())
            .then(response => this.setState({
                days: response.list,
                city: response.city.name
            }))
        } else {
            fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ sessionStorage.getItem('newCity') +'&cnt=5&appid=66c9a930e7ad9244acfdc66772fa1c34')
            .then(response => response.json())
            .then(response => this.setState({
                days: response.list,
                city: response.city.name
            }))
        }
        attachSharedState(this)
    }

    componentWillUnmount() {
        detachSharedState(this)
    }
    render(){
        var date = moment().format('MMMM Do YYYY [at] hh:mm a')
        var fiveDays = this.state.days.map((day, i) => {
            return          <div className="row" key={i}>
                                <div className="col-xs-3">{Math.round(day.temp.day * (9/5) - 459.67) + '°'}</div>
                                <div className="col-xs-3"><i className={('owf owf-' + day.weather[0].id)}></i></div>
                                <div className="col-xs-6">{moment.unix(day.dt).format('ddd')}</div>
                            </div>
        })
        return <div>
        <div className="top-section">
          <h4>{this.state.city}</h4>
          <p>{date}</p>
        </div>
        <div className="bottom-section">
            <div className="container">
                {fiveDays}
            </div>
        </div>
        <div>
        <Nav />
        </div>
        </div>
    }
}
export default Forecast
