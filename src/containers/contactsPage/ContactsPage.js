import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 
  const [name, setName] = useState('insert name here')
  const [phone, setPhone] = useState('insert phone number here')
  const [email, setEmail] = useState('insert email address here')
  const [duplicate, setDuplicate] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (duplicate === true) {
    return
   } else {
    addContact(name, phone, email)
    setName('')
    setPhone('')
    setEmail('')
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  contacts.map(contact => {
    if (contact.name.includes(name)) {      
      setDuplicate(true)
      } else {
        setDuplicate(false)
      }
      return null
  })
 }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm name={name} 
                      phone={phone} 
                      email={email}
                      setName={setName}
                      setPhone={setPhone}
                      setEmail={setEmail}
                      handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts}/>
      </section>
    </div>
  );
};
