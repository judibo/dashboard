import React, {Component} from 'react';
import './List.css';
import ListItem from './ListItem';

class List extends Component {
    render() {
        var mappedItems = this.props.items.map((item, index) => <ListItem handleRemove={this.props.handleRemove} key={index} item={item} />)
        return (
          <table className="List">
            <tbody>
              <tr>
                  <th>To Do:</th>
              </tr>
              { mappedItems }
            </tbody>
          </table>
        );
      }
}


export default List;