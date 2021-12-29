import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ContactList } from '../cmps/ContactList';
import { ContactFilter } from '../cmps/ContactFilter.jsx';
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contactActions';
import { useDispatch,useSelector } from 'react-redux';

export const ContactPage = () => {
    const dispatch = useDispatch();
    const { contacts } = useSelector(state => state.contactModule)

    useEffect ( ()=> {
       dispatch(loadContacts());
    },[])

    const onRemoveContact = async (contactId) => {
        dispatch(removeContact(contactId));
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy));
        dispatch(loadContacts());
    }

        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-page'>
                <div className='add-search'>
                    <Link to={'/contact/edit'}><img className='add-btn' src={`https://findicons.com/files/icons/986/aeon/256/add.png`} /></Link>
                    <ContactFilter onChangeFilter={onChangeFilter} />
                </div>
                <ContactList contacts={contacts} removeContact={onRemoveContact} />
            </section>
        )
}


