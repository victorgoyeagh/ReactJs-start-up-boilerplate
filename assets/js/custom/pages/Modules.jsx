import React from 'react';
import ReactDOM from 'react-dom'; 
import { contactListApp as ContactListApp } from "../modules/ContactList";

export class Modules extends React.Component {
    render() {
        //data
        let contacts = [
            {
                "_id": 1,
                "name": "Victor",
                "occupation": "Web Developer",
                "email": "victorgoyea@hotmail.com",
                "telephone": "07876572919"
            },
            {
                "_id": 3,
                "name": "Fred",
                "occupation": "Web Designer",
                "email": "fredwilson@gmail.com",
                "telephone": "07123456789"
            } 
        ]

        return (
            <div className="row">
                <div className="col-xs-12">
                    <section className="section modules">
                        <div className="container">
                            <h2>Modules</h2>
                            <hr />
                            <ContactListApp data={contacts} />
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
