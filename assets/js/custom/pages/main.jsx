import React from "react";
import { Link } from "react-router";

export class Main extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>Main content.</p>
                </div>
            </div>
        )
    }
}

module.exports = {
    main: Main
}