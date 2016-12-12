import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";
var classNames = require('classnames');

export class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.todoItems
    }
  }
  addItem(e) {
    const tmpItems = this.state.data;
    tmpItems.push({
      "id": 200,
      "name": "David Livingstone",
      "occupation": "Politician",
      "isOutdoor": false
    });
    this.setState({ data: tmpItems });
    e.preventDefault();
  }
  removeItem(id) {
    const tmpItems = this.state.data;
    var remainder = tmpItems.filter(el, function (item) {
      return !(item.id == id);
    });
    this.setState({ data: remainder });
    e.preventDefault();
  }
  render() {
    return (
      <div className="todo-container">
        <div className="row">
          <div className="col-xs-12">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <TodoAdd todoAdd={this.addItem.bind(this)} />
        <TodoList todoItems={this.state.data} removeItem={this.removeItem.bind(this)} />
      </div>
    )
  }
}

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }
  onEditClick(){
    this.setState({
      editing : true
    })
  }
  render() {
    var classes = ['todo-list__item', { 'todo-list__item--outdoor': this.props.isOutdoor }];
    return (
      <tr className={classNames(classes)} >
        <td className="col-sm-3">
          <label>{this.props.name}</label>
        </td>
        <td className="col-sm-3">
          <label>{this.props.occupation}</label>
        </td>
        <td className="col-sm-3">
          <label>{(this.props.isOutdoor) ? 'outdoor' : 'indoor'}</label>
        </td>
        <td className="col-sm-3">
          <button className="btn btn-default icon btn-warning">
            <i className="fa fa-times" aria-hidden="true"></i>
            Delete
          </button>
          <button className="btn btn-default icon btn-warning">
            <i className="fa fa-times" aria-hidden="true"></i>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

class TodoList extends React.Component {

  render() {
    var items = Array.prototype.map.call(this.props.todoItems, function (item, index) {
      return (
        <TodoItem todoItem={item} name={item.name} occupation={item.occupation} isOutdoor={item.isOutdoor} key={index} />
      )
    });
    return (
      <form onSubmit={this.addItem}>
        <div className="row">
          <div className="col-sm-12">
            <table classID="todo" className="todo-list">
              <thead>
                <tr>
                  <th className="col-sm-3">
                    <h4>Fullname</h4>
                  </th>
                  <th className="col-sm-3">
                    <h4>Occupation</h4>
                  </th>
                  <th className="col-sm-3">
                    <h4>Indoor</h4>
                  </th>
                  <th className="col-sm-3">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    )
  }
}

class TodoAdd extends React.Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <input className="form-control" type="text" name="newItemName" placeholder="Enter name" title="Item Name" value="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <input className="form-control" type="text" name="newOccupation" placeholder="Enter occupation" title="Item Occupation" value="" />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <input className="form-control" type="check" name="newIndoor" placeholder="Enter indoor" title="Item Indoor" value="" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <button type="submit" onClick={this.props.todoAdd.bind(this)} name="submit" className="btn btn-default icon btn-success">
              <i className="fa fa-plus" aria-hidden="true"></i>
                Add new item
            </button>
          </div>
        </form>
      </div>
    )
  }
}

module.exports = {
  todoListContainer: TodoListContainer
} 