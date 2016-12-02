import React from "react";
import { navigation as Navigation } from "./Navigation";
import { headerContainer as HeaderContainer } from "./Header";
import { main as Main } from "./Main";
import { footer as Footer } from "./Footer";

export class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <a href="#navigation" className="sr-only">Skip navigation</a>
                <HeaderContainer>
                    <Navigation />
                </HeaderContainer>
                <div id="toggleMain" className="toggleMain">
                    <a className="sr-only" name="navigation"></a>
                    <main>
                        <a className="sr-only" name="navigation"></a>
                        <div className="main">
                            {this.props.children}
                        </div>
                    </main>
                    <Footer />
                    <button id="js-scrollTop" className="btn btn-default btn-success scrollTop">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = {
    mainContainer: MainContainer
}