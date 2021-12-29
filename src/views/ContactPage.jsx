import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService.js';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter.jsx';
import { connect } from 'react-redux';
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions';

class _ContactPage extends Component {

    state = {
    }

    componentDidMount() {
        this.props.loadContacts();
    }

    removeContact = async (contactId) => {
        this.props.removeContact(contactId);
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    render() {
        const { contacts } = this.props;
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-page'>
                <div className='add-search'>
                    <Link to={'/contact/edit'}><img className='add-btn' src={`https://findicons.com/files/icons/986/aeon/256/add.png`} /></Link>
                    <ContactFilter onChangeFilter={this.onChangeFilter} />
                </div>
                <ContactList contacts={contacts} removeContact={this.removeContact} />
            </section>
        )
    }
}


const mapStateToProps = state => {
    return {
        contacts: state.contactModule.contacts,
    }
}

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)