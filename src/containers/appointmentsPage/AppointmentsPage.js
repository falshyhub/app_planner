import React, {useEffect, useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({contacts, appts, addAppt}) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('Insert Appointment Title Here');
  const [contact, setContact] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (duplicate === true) return;
    addAppt(title, contact, date, time)
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  useEffect(() => {
    appts.map(appt => {
      if (appt.time.includes(time)) {
        setDuplicate(true) 
      } else {
        setDuplicate(false)
      };
      return null
    });
  }, [appts, time])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={contacts}
                          title = {title}
                          setTitle = {setTitle}
                          contact = {contact}
                          setContact ={setContact}
                          date = {date}
                          setDate = {setDate}
                          time = {time}
                          setTime = {setTime}
                          handleSubmit = {handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list = {appts}/>
      </section>
    </div>
  );
};
