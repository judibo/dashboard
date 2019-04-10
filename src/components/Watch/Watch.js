import React, {Component} from 'react';
import './Watch.css';
import Clock from 'react-clock';

class Watch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }
    
    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }
    
    render() {
        return (
            <div className="Watch">
                <h3>Current time:</h3>
                <p>{new Date().toLocaleDateString()}</p>
                <Clock value={this.state.date} className="Clock"/>
            </div>
        );
      }
}


export default Watch;