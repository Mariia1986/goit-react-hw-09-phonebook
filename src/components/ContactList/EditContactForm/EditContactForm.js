import React, { useState } from "react";
import {useDispatch } from "react-redux";
import operation from "../../../redux/contacts/operation";
import s from "../ContactList.module.css";
import EditIcon from "@material-ui/icons/Edit";

const EditContactForm = ({ id, currName,currNumber, editReset}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(currName);
  const [number, setNumber] = useState(currNumber);
  const handleContactInfo = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        console.log("Something wrong");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newContact = { id, name, number };
    console.log(newContact)
   dispatch(operation.editContacts(newContact, id)) 
    editReset(id);
  };

  return (
    <form className={s.form} onSubmit={submitForm}>
      <label htmlFor="name" className={s.label}>
        Name
        <input
          placeholder="Ivan Ivanov"
          className={s.formInput}
          onChange={handleContactInfo}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label className={s.label}>
        Number
        <input
          placeholder="09755555555"
          required
          onChange={handleContactInfo}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          htmlFor="number"
          className={s.formInput}
          name="number"
          type="tel"
        />
      </label>
      <button className={s.contaktListButton} type="submit">
        <EditIcon color="primary" />
      </button>
    </form>
  );
};



export default EditContactForm;

