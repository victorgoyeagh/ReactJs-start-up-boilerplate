import React from 'react';
import ReactDOM from 'react-dom';
import _ from "lodash";
var classNames = require('classnames');

export class TodoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.totalNoOfItemsAllowed = 1000;
    this.state = {
      data: this.props.todoItems
    }
  }
  getInitialState(){
    return { data: this.props.todoItems }
  }
  removeItem(itemId) {
    const tmpItems = this.state.data;
    var remainderItems = tmpItems.filter(function(item){ 
      return item.id !== itemId 
    });
    this.setState({ data: remainderItems });
  }
  addItem(newItem) {
    const tmpItems = this.state.data;
    tmpItems.push(newItem);
    this.setState({ 
      data: tmpItems 
    });
  }
  render() {
    return (
      <div className="todo-container">
        <div className="row"> 
          <div className="col-xs-12">
            <h3>{this.props.header}</h3>
          </div>
        </div>
        <TodoAddForm todoAddItem={this.addItem} />
        <TodoList todoItems={this.state.data} removeTodoItem={this.removeItem} />
      </div>
    )
  }
}

class TodoItem extends React.Component {
  handleRemoveItem(e){
    var emitItem = this.refs.itemKey.value;
    console.log(emitItem)
    this.props.removeTodoItem(emitItem);
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
          <input type="hidden" ref="itemKey" value={this.props.todoItem} />
        </td>
        <td className="col-sm-3">
          <button className="btn btn-default icon btn-warning" onClick={this.handleRemoveItem.bind(this)}>
            <i className="fa fa-times" aria-hidden="true"></i>
            Delete
          </button>
          <button className="btn btn-default icon btn-warning">
            <i className="fa fa-pencil" aria-hidden="true"></i>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

class TodoAddForm extends React.Component {
  handleSubmit(ev){
    ev.preventDefault(); 
    const newItem = {
      "id": ((Math.random(this.totalNoOfItemsAllowed) * 10) + 1),
      "name": this.refs.newItemName.value,
      "occupation": this.refs.newItemOccupation.value,
      "isOutdoor": (this.refs.newItemIndoor.checked) ? true : false 
    }
    this.props.todoAddItem(newItem);
  }
  render(){
    return(
       <div className="row">
          <form id="addTodoForm" onSubmit={this.handleSubmit}>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <input required type="text" className="form-control" name="newItemName" ref="newItemName" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <input required type="text" className="form-control" name="newItemOccupation" ref="newItemOccupation" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="checkbox">
                <input type="checkbox" id="newItemIndoor" name="newItemIndoor" ref="newItemIndoor" />
              </div>
            </div> 
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <input value="Add new item" type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-default icon btn-success" /> 
            </div>
          </form>
        </div>
    )
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



module.exports = {
  todoListContainer: TodoListContainer
} 