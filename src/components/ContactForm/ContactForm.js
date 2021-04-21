import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import operation from "../../redux/contacts/operation";
import { getContacts } from "../../redux/contacts/selectors";
import { Button } from "react-bootstrap";


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactInfo = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number };

    if (
      this.props.contacts.some(
        (el) => el.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.props.addContact(newContact);
     
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
      <h1 className={s.header}>Phonebook</h1>
      <div className={s.container}>
        
      <form className={s.form} onSubmit={this.submitForm}>
        <label htmlFor="name" className={s.label}>
          Name
          <input
            placeholder="Ivan Ivanov"
            className={s.formInput}
            onChange={this.handleContactInfo}
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
            onChange={this.handleContactInfo}
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
        <Button className={s.addButton} variant="primary" type="submit">Add contact</Button>
      </form>
      </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: getContacts(state),
});
const mapDispatchToProps = {
  addContact: operation.addContacts,
  editCont:operation.editContacts

};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
