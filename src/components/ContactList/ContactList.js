import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "../ContactList/phonebook.module.css";
import { deleteContacts } from "../../redux/contacts/contacts-actions";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ol className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.list} key={id}>
          <p className={s.text}>{name}, </p>
          <p className={s.text}>tlf.: {number}</p>
          <button
            type="button"
            className={s.btn_del}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const showFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = state => {
  const {items, filter } = state.contacts;
  return { 
    contacts: showFilteredContacts(items, filter) 
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
