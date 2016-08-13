import React, {Component} from 'react';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';

class ContactDetailComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            contact: {}
        };
        
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount() {
        ContactStore.addChangeListener(this.onChange);
    }
    
    componentDidMount() {
        ContactActions.getContact(this.props.params.id);
    }
    
    componentWillUnmount() {
        ContactStore.removeChangeListener(this.onChange);
    }
    
    componentWillReceiveProps() {
        this.setState({
            contact: ContactActions.getContact(nextProps.params.id)
        })
    }
    
    onChange() {
        this.setState({
            contact: ContactStore.getContact(this.props.params.id)
        })
    }
    
    render() {
        let contact;
        if (this.state.contact) contact = this.state.contact;
        
        <div>
            { this.state.contact &&
                <div>
                    <img src={contact.image} width="120"/>
                    <h1>{contact.name}</h1>
                    <h2>{contact.email}</h2>
                </div>
            }
        </div>
    }
}

export default ContactDetailComponent;
