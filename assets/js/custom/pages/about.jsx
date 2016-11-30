import React from "react";

export class About extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>About us content.</p>
                </div>
            </div>
        )
    }
}

module.exports = {
    about: About
}