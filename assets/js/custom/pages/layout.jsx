import React from "react";
import { Link } from "react-router";

export class Layout extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>Layout/Home</p>
                    <ul>
                        <li><Link to="about">About us</Link></li>
                        <li><Link to="contact">Contact us</Link></li>
                        <li><Link to="services">Services</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = {
    layout: Layout
}