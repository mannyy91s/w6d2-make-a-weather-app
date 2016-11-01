import React from 'react'
import { Link } from 'react-router'  //link is a component built into react-router which provides a alternative to the <a> tag

class CMS extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
        <h1>Content Management System</h1>
        <Link to="/">
        <button type="button" className="btn btn-default">Home</button>
        </Link>
        <Link to="/page">
        <button type="button" className="btn btn-default">Page</button>
        </Link>
        <Link to="/editor">
        <button type="button" className="btn btn-default">Editor</button>
        </Link>
        <div className="panel panel-default">
            <div className="panel-body">
                {this.props.children}
            </div>
        </div>
        </div>
    }
}

export default CMS
