import React from 'react';
import ReactDOM from 'react-dom';
import { todoListContainer as TodoListContainer } from "../modules/TodoList";

export class Modules extends React.Component {
    render() {
        //data
        let items = [
            {
                "id": 1,
                "name": "Victor Goyea",
                "occupation": "Web Development",
                "isOutdoor": false
            },
            {
                "id": 2,
                "name": "Fred Flingstone",
                "occupation": "Cartoon character",
                "isOutdoor": true
            }
        ]

        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h2>Modules</h2>
                            <hr />
                            <TodoListContainer todoItems={items} header="Todo List" />
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = {
    modules: Modules
}
