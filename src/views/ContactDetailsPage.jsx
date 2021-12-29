import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService';
import { userService } from '../services/userService';
import { TransferFund } from '../cmps/TransferFund';
import { MoveList } from '../cmps/MoveList';

import { connect } from 'react-redux';
import { getContactById } from '../store/actions/contactActions';

class _ContactDetailsPage extends Component {

    state = {
        contact: null,
        loggedinUser: null,
    }

    async componentDidMount() {
        const user = userService.getUser();
        if (!user) {
            this.props.history.push('/signup');
            return;
        }
        this.setState({ loggedinUser: user })
        this.loadContact();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact();
        }
    }

    async loadContact() {
        const contact = await this.props.getContactById(this.props.match.params.id);
        this.setState({ contact })
    }

    addMove = (contact,amount) => {
        userService.addMove(contact,amount);
        this.props.history.push('/contact');
        window.scrollTo(0, 0);
    }

    render() {
        const { contact, loggedinUser } = this.state;
        if (!contact || !loggedinUser) return <div>Loading...</div>
        return (
            <section className='contact-details-page main-layout'>
                <img src={`https://robohash.org/${contact._id}?set=set2`} />
                <h3> 🧍‍♂️ Name:  {contact.name} </h3>
                <h3> 📩 Email: {contact.email} </h3>
                <h3> 📞Phone:  {contact.phone} </h3>
                <TransferFund contact={contact} addMove={this.addMove} />
                <MoveList loggedinUser={loggedinUser} contact={contact} />
                <Link to={'/contact'}>Go Back</Link>
            </section>
        )
    }
}


const mapDispatchToProps = {
    getContactById
}

export const ContactDetailsPage = connect(undefined, mapDispatchToProps)(_ContactDetailsPage)