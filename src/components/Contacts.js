import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
// import {Link} from 'react-router';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';
import ContactListItem from './ContactListItem';

/*
* We'll use this to get a contact list item
* for each of the contacts in the list
* */

function getContactListItem(contact) {
    return (
        <ContactListItem
            key={contact.id}
            contact={contact}
        />
    )
}


/////
class ContactsComponent extends Component {
    
    constructor(){
        super();
        
        /*
        * For the initial state,
        * we want an empty contacts array
        * */
        this.state = {
            contacts: []
        };
        
        /*
        * bind onChange to get the proper
        * reference inside the method
        * */
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        ContactStore.addChangeListener(this.onChange);
    }
    
    componentDidMount() {
        ContactActions.receiveContacts();
    }
    
    componentWillUnmount() {
        ContactStore.removeChangeListener(this.onChange);
    }
    
    onChange() {
        this.setState({
            contacts: ContactStore.getContacts()
        })
    }
    
    render() {
        let contactListItems;
        if (this.state.contacts) {
            /*
            * map over the contacts and get an element for each
            * */
            contactListItems = this.state.contacts.map(contact => getContactListItem(contact));
        }
        
        return (
            <div>
                <ListGroup>
                    {contactListItems}
                </ListGroup>
            </div>
        )
    }
}

export default ContactsComponent;
