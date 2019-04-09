import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(e) {
        this.props.handleRemove(this.props.item);
    }
    render() {
        return (
            <tr>
                <td>{this.props.item} <button onClick={this.handleRemove}>x</button></td>
            </tr>
        );
      }
}


export default ListItem;