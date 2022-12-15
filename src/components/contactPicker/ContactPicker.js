import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value='Select Contact' selected>Select Contact</option>
      {contacts.map(contact =>{
        return <option value={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
