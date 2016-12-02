import React from 'react';
import ReactDOM from 'react-dom';

export class General extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h3>General</h3>
                            <p>General content.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

module.exports = {
    general: General
}
