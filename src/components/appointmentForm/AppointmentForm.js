import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };


  const handleTitleChange = ({target}) => {
    setTitle(target.value)
  };

  const handleDateChange = ({target}) => {
    setDate(target.value)
  };

  const handleTimeChange = ({target}) => {
    setTime(target.value)
  };
  
  const handleContactChange = ({target}) => {
    setContact(target.value)
  }
  

  return (    
    <form onSubmit={handleSubmit}>
      <input type='text' value={title} onChange={handleTitleChange}></input>
      <input type='date' value={date} min={getTodayString} onChange={handleDateChange}></input>
      <input type='time' value={time} onChange={handleTimeChange} required></input>
      <ContactPicker contacts={contacts} onChange={handleContactChange}/>
      <input type='submit'/> 
    </form>
  );
};
