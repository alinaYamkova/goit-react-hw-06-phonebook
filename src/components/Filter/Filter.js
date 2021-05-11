import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import s from "../ContactList/phonebook.module.css";
import { filterContacts } from '../../redux/contacts/contacts-actions';


const Filter = ({ filterVal, onChangeFilter }) => {
  return (
    <label className={s.filter_label}>
      To make filter by Name
      <input  
         className={s.filter_input}
         type='text'
         value={filterVal}
         onChange={onChangeFilter }
      />
    </label>
  );
}

Filter.propTypes = {
  filterVal: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filterVal: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);