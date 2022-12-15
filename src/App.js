import React from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import {useState} from 'react';
import { Home } from './components/Home/Home'

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [ contacts, setContacts ] = useState([])
  const [ appts, setAppts ] = useState([])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    const contact = {name, phone, email};
    setContacts((prev) => {
      return [...prev, contact]
    });
  };

  const addAppt = (title, contact, date, time) => {
    const appointment = {title, contact, date, time}
    setAppts((prev) => {      
        return [...prev, appointment]      
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path={ROUTES.CONTACTS} element = {<ContactsPage contacts={contacts} addContact={addContact}/>} />
          <Route path={ROUTES.APPOINTMENTS} element = {<AppointmentsPage appts={appts} addAppt = {addAppt} contacts={contacts}/> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
