import { Link } from "react-router-dom"
export function ContactPreview({ contact, removeContact }) {

  function onRemoveContact(contactId) {
    removeContact(contactId)
  }

  return (
    <div className="contact-preview">
      <h3>{contact.name}</h3>
      <Link to={`/contact/${contact._id}`}>
      <img src={`https://robohash.org/${contact._id}?set=set2`}/>
      </Link>
      <div className="actions">
      <Link to={`/contact/edit/${contact._id}`}>🔧</Link>
      <button onClick={() => onRemoveContact(contact._id)}>X</button>
      </div>
      
    </div>
  );
}
