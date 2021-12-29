import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService';

export class ContactEditPage extends Component {

    state = {
        contact: null,
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id;
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact();
        this.setState({ contact });
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }));
    }

    onSaveContact = async (ev) => {
        ev.preventDefault();
        await contactService.saveContact({ ...this.state.contact });
        this.props.history.push('/contact');
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-edit-page main-layout'>
                {!contact._id && <h1>Add Contact</h1>}
                {contact._id && <h1>Edit Contact</h1>}
                <form onSubmit={this.onSaveContact} >
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" />
                    <label htmlFor="phone">Email</label>
                    <select onChange={this.handleChange} value={contact.email} name="email" id="email">
                        <option value="" disabled>Select A Email</option>
                        <option value="name@gmail.com" >Gmail</option>
                        <option value="name@walla.co.il" >Walla</option>
                        <option value="name@nana.co.il" >Nana</option>
                        <option value="name@outlook.com" >Outlook</option>
                    </select>
                    <label htmlFor="phone">Phone</label>
                    <input onChange={this.handleChange} value={contact.phone} type="text" name="phone" id="phone" />
                    <button >Save</button>
                    <Link to={'/contact'}>Go Back</Link>
                </form>
            </div>
        )
    }
}


