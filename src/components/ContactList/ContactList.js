import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from "../ContactList/phonebook.module.css";
import actions from "../../redux/contacts/contacts-action";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ol>
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

const showFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
     contact.name.includes(normalizedFilter)
  );
};

const mapStateToProps = state => {
  const {items, filter } = state.contacts;
  return { 
    contacts: showFilteredContacts(items, filter) 
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactList);