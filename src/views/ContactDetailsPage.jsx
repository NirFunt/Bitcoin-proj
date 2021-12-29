import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { userService } from '../services/userService';
import { TransferFund } from '../cmps/TransferFund';
import { MoveList } from '../cmps/MoveList';
import { getContactById } from '../store/actions/contactActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const ContactDetailsPage = (props) => {

    const [contact, setContact] = useState(null);
    const [loggedinUser, setLoggedinUser] = useState(null);
    // const history = useHistory()
    const dispatch = useDispatch();

    useEffect(async () => {
        const user = userService.getUser();
        if (!user) {
            props.history.push('/signup');
            return;
        }
       setLoggedinUser( user )
        loadContact();
    }, [])

    useEffect(() => {
        loadContact();
    }, [props.match.params.id])


    const loadContact = async () => {
        const contact = await dispatch(getContactById(props.match.params.id));
        setContact( contact )
    }

    const addMove = (contact, amount) => {
        userService.addMove(contact, amount);
        props.history.push('/contact');
        window.scrollTo(0, 0);
    }

    if (!contact || !loggedinUser) return <div>Loading...</div>
    return (
        <section className='contact-details-page main-layout'>
            <img src={`https://robohash.org/${contact._id}?set=set2`} />
            <h3> 🧍‍♂️ Name:  {contact.name} </h3>
            <h3> 📩 Email: {contact.email} </h3>
            <h3> 📞Phone:  {contact.phone} </h3>
            <TransferFund contact={contact} addMove={addMove} />
            <MoveList loggedinUser={loggedinUser} contact={contact} />
            <Link to={'/contact'}>Go Back</Link>
        </section>
    )
}

