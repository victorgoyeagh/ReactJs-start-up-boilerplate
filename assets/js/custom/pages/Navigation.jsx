import React from "react";
import ReactDOM from "react-dom";  
import { Link } from "react-router";

export class Navigation extends React.Component { 
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="general">General</Link></li>
                <li className="dropdown">
                    <Link to="modules" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Modules <span className="caret"></span></Link>
                    <ul className="dropdown-menu" role="menu">
                        <li><Link to="modules">Module One</Link></li>
                        <li><Link to="modules">Module Two</Link></li>
                        <li><Link to="modules">Module Three</Link></li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Our Work</li>
                        <li><Link to="modules">Module One</Link></li>
                        <li><Link to="modules">Module Two</Link></li>
                    </ul>
                </li>
                <li className="dropdown dropdown--fullwidth">
                    <Link to="forms" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Forms<span className="caret"></span></Link>
                    <div className="dropdown-menu" role="menu">
                        <div className="dropdown-cont">
                            <h3>Forms</h3>
                            <p><Link to="forms">Form One</Link>Donec aliquet enim id lorem faucibus consequat. Vivamus iaculis tortor lobortis
                            tellus pharetra efficitur. Metus eu tempor condimentum, leo
                            tortor efficitur magna, quis feugiat purus lorem nec libero. Nulla sodales
                            egestas elit in aliquam.</p>
                        </div>
                    </div>
                </li>
                
            </ul>
        )
    }
}

module.exports = {
    navigation: Navigation
}