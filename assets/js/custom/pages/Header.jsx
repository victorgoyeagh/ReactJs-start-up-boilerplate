import React from "react";
import ReactDom from "react-dom";

export class HeaderContainer extends React.Component {
    render() {
        return (
            <header>
                <div className="header">
                    <div className="container">
                        <nav className="navbar">
                            <div className="container-fluid">
                                <div id="toggleHeader" className="navbar-header">
                                    <button id="toggleBtn" type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="http://incentive.com">
                                        <img src="/assets/images/default/logo-blk.png" alt="Incentive" />
                                    </a>
                                </div>
                                <div id="toggleNav" className="navbar-collapse collapse">
                                    {this.props.children}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

module.exports = {
    headerContainer: HeaderContainer
}