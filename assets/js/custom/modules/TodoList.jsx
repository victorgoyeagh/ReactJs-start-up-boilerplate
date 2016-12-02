import React from 'react';
import ReactDOM from 'react-dom';
var classNames = require('classnames');

export class TodoListContainer extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <div className="row">
          <div className="col-xs-12">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <p>{this.state}</p>
            <AddItem />
            <TodoList todoItems={this.props.todoItems} />
          </div>
        </div>
      </div>
    )
  }
}

class AddItem extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-4">
          <input className="form-control" type="text" name="newItemName" placeholder="Enter name" title="Item Name" value="" />
        </div>
        <div className="col-xs-4">
          <input className="form-control" type="text" name="newOccupation" placeholder="Enter occupation" title="Item Occupation" value="" />
        </div>
        <div className="col-xs-4">
          <button className="form-control" name="btnAddNewItem" className="btn btn-default icon btn-success"><i className="fa fa-plus" aria-hidden="true"></i>Add new item</button>
        </div>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    var items = Array.prototype.map.call(this.props.todoItems, function (item) {
      return (
        <TodoItem name={item.name} occupation={item.occupation} item={item} isOutdoor={item.isOutdoor} />
      )
    });
    return (
      <table classID="todo" className="todo-list form-group">
        <thead>
          <tr>
            <th className="col-xs-4">
              <h4>Fullname</h4>
            </th>
            <th className="col-xs-4">
              <h4>Occupation</h4>
            </th>
            <td className="col-xs-4">
            </td>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    )
  }
}

class TodoItem extends React.Component {
  render() {
    var classes = ['todo-list__item', { 'todo-list__item--outdoor': this.props.isOutdoor }];
    return (
      <tr className={classNames(classes)} >
        <td className="col-xs-4">
          <label>{this.props.name}</label>
        </td>
        <td className="col-xs-4">
          <label>{this.props.occupation}</label>
        </td>
        <td className="col-xs-4">
          <button className="btn btn-default icon btn-warning"><i className="fa fa-times" aria-hidden="true"></i>Delete</button>
        </td>
      </tr>
    );
  }
}

module.exports = {
  todoListContainer: TodoListContainer
} 