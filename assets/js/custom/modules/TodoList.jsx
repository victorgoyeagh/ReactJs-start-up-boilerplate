import React from 'react';
import ReactDOM from 'react-dom';
var classNames = require('classnames');

export class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.todoItems
    }
  } 
  removeItem(item){ 
    let index = this.state.data.indexOf(item);
    this.state.data.splice(index, 1);
    //console.log(this.state.data);
  }
  updateState(newData){
    this.setState = {
       data : newData 
    }
  }
  render() {
    return (
      <div className="todo-container">
        <div className="row">
          <div className="col-xs-12">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <button className="btn btn-default" onclick={this.removeItem(this.state.data[1])}>Update state</button>
        <AddItem todoItems={this.state.data} />
        <TodoList todoItems={this.state.data} />
      </div>
    )
  }
}

class TodoList extends React.Component { 
  render() {
    //console.log(this.props.todoItems);
    var items = Array.prototype.map.call(this.props.todoItems, function (item) {
      return (
         <TodoItem name={item.name} occupation={item.occupation} isOutdoor={item.isOutdoor} item={item} />
      )
    });
    return (
      <div className="row">
        <div className="col-sm-12">
          <table classID="todo" className="todo-list">
            <thead>
              <tr>
                <th className="col-sm-4">
                  <h4>Fullname</h4>
                </th>
                <th className="col-sm-4">
                  <h4>Occupation</h4>
                </th>
                <th className="col-sm-4">
                </th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class TodoItem extends React.Component {
  render() {
    var classes = ['todo-list__item', { 'todo-list__item--outdoor': this.props.isOutdoor }];
    return (
      <tr className={classNames(classes)} >
        <td className="col-sm-4">
          <label>{this.props.name}</label>
        </td>
        <td className="col-sm-4">
          <label>{this.props.occupation}</label>
        </td>
        <td className="col-sm-4">
          <button className="btn btn-default icon btn-warning"><i className="fa fa-times" aria-hidden="true"></i>Delete</button>
        </td>
      </tr>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div className="row">
        <table>
          <tr>
            <td className="col-sm-4">
              <input className="form-control" type="text" name="newItemName" placeholder="Enter name" title="Item Name" value="" />
            </td>
            <td className="col-sm-4">
              <input className="form-control" type="text" name="newOccupation" placeholder="Enter occupation" title="Item Occupation" value="" />
            </td>
            <td className="col-sm-4">
              <button className="form-control" name="btnAddNewItem" className="btn btn-default icon btn-success"><i className="fa fa-plus" aria-hidden="true"></i>Add new item</button>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

module.exports = {
  todoListContainer: TodoListContainer
} 