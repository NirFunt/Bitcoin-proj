import { ContactPreview } from "./ContactPreview";

export function ContactList({contacts,removeContact}) {
    return (
        <div className="contact-list">
          {/* {JSON.stringify(contacts)} */}
          {/* <ContactPreview contact={contacts[0]}/> */}

          {contacts.map(cuurContact =>
           <ContactPreview key={cuurContact._id} contact={cuurContact } removeContact={removeContact} /> )}
        </div>
    );
}




  