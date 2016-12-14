import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class ContactsListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data: this.props.data
        }
    }
    componentDidMount() {
        this.state = {
            data: this.props.data
        }
    }
    componentWillUnmount() {
        this.state = {
           data: this.props.data
        }
    }
    addContact = (newContactObj) => {
        var tmpStateData = this.state.data;
        tmpStateData.push(newContactObj);

        this.setState({
            data: tmpStateData
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <h3>Contact List</h3>
                    <div className="contact-list">
                        <AddContactPanel addNewContact={this.addContact.bind(this)} />
                        <ContactListPanel contacts={this.state.data} />
                    </div>
                </div>
            </div>
        )
    }
}

class ContactListPanel extends React.Component {
    render() {
        var items = Array.prototype.map.call(this.props.contacts, function (contact, index) {
            return <ContactItem
                key={index}
                name={contact.name}
                occupation={contact.occupation}
                email={contact.email}
                telephone={contact.telephone} />
        });

        return (
            <div className="row">
                <div className="col-sm-12">
                    <table className="contact-list">
                        <thead>
                            <tr>
                                <th className="col-sm-3">
                                    <h4>Fullname</h4>
                                </th>
                                <th className="col-sm-3">
                                    <h4>Occupation</h4>
                                </th>
                                <th className="col-sm-3">
                                    <h4>Email</h4>
                                </th>
                                <th className="col-sm-3">
                                    <h4>Telephone</h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

class AddContactPanel extends React.Component {
    handleAddContact(e) {
        var contactItem = this.refs.newContactName,
            r = this.refs;

        var cn = r.newContactName,
            co = r.newContactOccupation,
            ce = r.newContactEmail,
            ct = r.newContactTelephone;

        this.props.addNewContact({
            "_id": (Math.random(1000 * 10) + 1),
            "name": cn.value,
            "occupation": co.value,
            "email": ce.value,
            "telephone": ct.value
        });

        cn.value = '';
        e.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <form>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Fullname" ref="newContactName" type="text" name="newContactName" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Occupation" ref="newContactOccupation" type="text" name="newContactOccupation" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Email address" ref="newContactEmail" type="text" name="newContactEmail" />
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                        <input required className="form-control" placeholder="Enter Telephone" ref="newContactTelephone" type="text" name="newContactTelephone" />
                    </div>
                    <div className="col-xs-12 text-right">
                        <input type="submit" className="btn btn-default icon btn-success btn-incentive" name="submit" onClick={this.handleAddContact.bind(this)} />
                    </div>
                </form>
            </div>
        )
    }
}

class ContactItem extends React.Component {
    render() {
        var classes = ['contact-list__item', { 'contact-list__item--outdoor': this.props.isOutdoor }];
        return ( 
            <tr className={classNames(classes)}>
                <td className="col-sm-3">
                    <label>{this.props.name}</label>
                </td>
                <td className="col-sm-3">
                    <label>{this.props.occupation}</label>
                </td>
                <td className="col-sm-3">
                    <label>{this.props.email}</label>
                </td>
                <td className="col-sm-3">
                    <label>{this.props.name}</label>
                </td>
            </tr>
        )
    }
}

module.exports = {
    contactListApp: ContactsListApp
}