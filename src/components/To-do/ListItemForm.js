import React, {Component} from 'react';
import './ListItemForm.css';

class ListItemForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit( e.target.todoItem.value )
        e.target.todoItem.value = "";
    }
    render() {
        return (
            <div className="ListItemForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todoItem" placeholder="Add item"/>
                    <input type="submit" value="Add Item" />
                </form>
            </div>
        );
      }
}


export default ListItemForm;