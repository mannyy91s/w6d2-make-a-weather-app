import React from 'react'
import ReactDOM from 'react-dom'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.addCounter = this.addCounter.bind(this)
        this.state = {
            counter: 0,
            shouldAdd: 0
        }
    }
    addCounter(){
        var updatedCounter = this.state.counter   //make copy of it first
        updatedCounter++                           //then change it.
        this.setState({
            counter: updatedCounter
        })
    }

    render() {
        var lis = []
        for (let i = 0; i < this.state.counter; i++) {
            lis.push(<li className="list-group-item">{i + this.state.shouldAdd}</li>)
        }

        return <div>
        <button type="button" className="btn btn-default btn-block" onClick={this.addCounter}>Click Me</button>
        <button type="button" className="btn btn-default btn-block" onClick={()=>this.setState({shouldAdd:1})}>Click to Add 1</button>
        <ul className="list-group">
            {lis}
        </ul>
        </div>
    }
}

ReactDOM.render(<Button />, document.getElementById('react'))
