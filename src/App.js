import React, { Component } from 'react';
import './App.css';
import List from './components/To-do/List';
import ListItemForm from './components/To-do/ListItemForm';
import Watch from './components/Watch/Watch';
import Weather from './components/Weather/Weather';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			items: []
		}
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
	}
	handleAddItem(item) {
		var items = this.state.items.slice();
		items.push(item);
		this.setState({items: items}) //setState is an async Function
	}
	handleRemoveItem(item){
		var items = this.state.items.slice();
		var index = items.indexOf(item);
		items.splice(index, 1)
		this.setState({ items: items })
	}
	
  	render() {
    	return (
		<section>
			<div className="App">
				<header className="App-header">Dashboard</header>
				<div className="Todo">
					<ListItemForm handleSubmit={this.handleAddItem}/>
					<List handleRemove={this.handleRemoveItem} items={this.state.items} />
				</div>
				<div className="Time">
					<Watch />
				</div>
				<div className="Weather">
					<Weather />
				</div>
			</div>
		</section>

		);
  	}
}

export default App;
