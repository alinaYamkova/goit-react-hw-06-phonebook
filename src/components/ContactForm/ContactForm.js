import React, { Component } from "react";
import s from "../ContactList/phonebook.module.css";
import { connect } from "react-redux";
import { addContacts } from "../../redux/contacts/contacts-actions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = this.state;
    if ( name !== '' && value !== '') {
      this.props.addNewContact(this.state);
      this.reset();
      return;
    }
    alert('Please, fill up the fields')
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              // id={uuidv4()}
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="name"
              className={s.input}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              // id={uuidv4()}
              value={this.state.number}
              onChange={this.handleChange}
              type="text"
              name="number"
              placeholder="number"
              className={s.input}
            />
          </label>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  addNewContact: (contact) => dispatch(addContacts(contact)),
});
    
export default connect(null, mapDispatchToProps) (ContactForm);
