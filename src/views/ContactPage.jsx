import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService.js';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter.jsx';

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy : null,
    }

    componentDidMount() {
        this.loadContacts();
    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    removeContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.loadContacts()
    }

    onChangeFilter = (filter) => {
        console.log(filter);
        this.setState({filterBy: filter}, ()=> this.loadContacts());
    }

    render() {
        const { contacts } = this.state;
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-page main-layout'>
                <div className='add-search'>
                <Link to={'/contact/edit'}><img className='add-btn' src={`https://findicons.com/files/icons/986/aeon/256/add.png`}/></Link>
                <ContactFilter onChangeFilter={this.onChangeFilter}/>
                </div>
                <ContactList contacts={contacts} removeContact={this.removeContact} />
            </section>
        )
    }
}

