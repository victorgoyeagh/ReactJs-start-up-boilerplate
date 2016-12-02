import React from 'react';
import ReactDOM from 'react-dom';

export class Modules extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h3>Modules</h3>
                            <p>Modules page.</p>
                            <div id="todo"></div>
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
