import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService';

export const ContactEditPage = (props) =>  {

    const [contact,setContact] = useState(null);

    useEffect ( async ()=> {
        const contactId = props.match.params.id;
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact();
        setContact( contact );
    },[])
 
    
    const handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        setContact(prevContact =>  ({ ...prevContact, [field]: value } ));
    }

    const onSaveContact = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact({ ...contact });
        props.history.push('/contact');
    }

        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-edit-page main-layout'>
                {!contact._id && <h1>Add Contact</h1>}
                {contact._id && <h1>Edit Contact</h1>}
                <form onSubmit={onSaveContact} >
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={contact.name} type="text" name="name" id="name" />
                    <label htmlFor="phone">Email</label>
                    <select onChange={handleChange} value={contact.email} name="email" id="email">
                        <option value="" disabled>Select A Email</option>
                        <option value="name@gmail.com" >Gmail</option>
                        <option value="name@walla.co.il" >Walla</option>
                        <option value="name@nana.co.il" >Nana</option>
                        <option value="name@outlook.com" >Outlook</option>
                    </select>
                    <label htmlFor="phone">Phone</label>
                    <input onChange={handleChange} value={contact.phone} type="text" name="phone" id="phone" />
                    <button >Save</button>
                    <Link to={'/contact'}>Go Back</Link>
                </form>
            </div>
        )
}


