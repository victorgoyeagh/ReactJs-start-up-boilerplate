import React from 'react'; 
var classNames = require('classnames');

export class TodoListContainer extends React.Component {
  getInitialState() {
    return (
      (this.props.todoItems) ? { data: this.props.todoItems } : { data: [] }
    )
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <AddItem />
          <TodoList todoItems={this.props.todoItems} />
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
          <input type="text" name="newItemName" title="Item Name" value="" />
        </div>
        <div className="col-xs-4">
          <input type="text" name="newOccupation" title="Item Occupation" value="" />
        </div> 
        <div className="col-xs-4">
          <button name="btnSearch" className="btn btn-default">Go</button>
        </div>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    var items = Array.prototype.map.call(this.props.todoItems, function (item) {
      return (
        <TodoItem name={item.name} occupation={item.occupation} item={item} IsOutdoor={item.IsOutdoor} />
      )
    });
    return (
      <div classID="todo" className="todo-list">
        {items}
      </div>
    )
  }
}

class TodoItem extends React.Component {
  render() {  
    console.log(this.props.IsOutdoor);
    var classes = ['row todo-list__item', { 'todo-list__item--outdoor': this.props.IsOutdoor }];
    return (
      <div className={ classNames(classes) } >
        <div className="col-xs-4">
          {this.props.name}
        </div>
        <div className="col-xs-4">
          {this.props.occupation}
        </div>
        <div className="col-xs-4">
          <button className="btn btn-default btn-warning">Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoListContainer;