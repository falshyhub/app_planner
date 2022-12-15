import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = ({target}) => {
    setName(target.value)
  };

  const handlePhoneChange = ({target}) => {
    setPhone(target.value)
  };

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  };

  return (
    <form onSubmit={handleSubmit}>
    Contact Form
      <input type='text' value={name} onChange={handleNameChange}></input>
      <input type='tel' value={phone} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" onChange={handlePhoneChange}></input>
      <input type='email' value={email} onChange={handleEmailChange}></input>
      <input type='submit'/>   
    </form>
  );
};
