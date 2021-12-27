import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService';

export class ContactDetailsPage extends Component {

    state = {
        contact: null,

    }

    async componentDidMount() {
        this.loadContact();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id);
        this.setState({contact})
    }


    render() {
        const { contact } = this.state;
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-details-page main-layout'>
                <img src={`https://robohash.org/${contact._id}?set=set2`}/>
                <h3>Name:  {contact.name} </h3>
                <h3> Email: {contact.email} </h3>
                <h3> Phone:  {contact.phone} </h3>
                <h3> Coins:  {contact.coins} </h3>
                <ul>
                    {contact.moves.map((move, idx) =>
                        <li key={move.createdAt + idx}>
                            <p>{move.txt} : {new Date(move.createdAt).toLocaleDateString()}</p>
                        </li>)}
                </ul>
                <Link to={'/contact'}>Go Back</Link>
            </section>
        )
    }
}

