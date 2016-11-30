import React from "react";

export class Contact extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>Contact us content.</p>
                </div>
            </div>
        )
    }
}

module.exports = {
    contact: Contact
}